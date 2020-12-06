import { getInput } from "../../../utils";

interface Field {
    regex: RegExp;
    fieldValidator: (value: string) => boolean;
}

type Passport = { [key: string]: string };


const passportProcessing = async (part1: boolean): Promise<number> => {
    const list = cleanList(await getInput('./data/passport_processing.txt'));
    return list.filter( passport => isValidPassport(passport, part1)).length
}


const cleanList = (lines: Array<string>): Array<Passport> => {
    const passports = [];
    let currentPassport: Passport = {}
    for (const line of lines) {
        if (!line.trim() && Object.keys(currentPassport).length > 0) {
            passports.push(currentPassport);
            currentPassport = {};
        } else {
            const keyValue = line.trim().split(" ").map(t => t.trim().split(":"));
            for (const [field, value] of keyValue) {
                currentPassport[field] = value;
            }
        }
    }
    if (Object.keys(currentPassport).length > 0) {
        passports.push(currentPassport);
    }
    return passports;
}

const isValidPassport = (passport: Passport, part1: boolean): boolean => {
    const fields: Map<string, Field> = new Map();
    fields.set("byr", {
        regex: new RegExp('^([0-9]{4})$'),
        fieldValidator: (value: string) => ((parseInt(value, 10) > 1919) && (parseInt(value, 10) < 2003))
    });
    fields.set("iyr", {
        regex: new RegExp('^([0-9]{4})$'),
        fieldValidator: (value: string) => ((parseInt(value, 10) > 2009) && (parseInt(value, 10) < 2021))
    });
    fields.set("eyr", {
        regex: new RegExp('^([0-9]{4})$'),
        fieldValidator: (value: string) => ((parseInt(value, 10) > 2019) && (parseInt(value, 10) < 2031))
    });
    fields.set("hgt", {
        regex: new RegExp('^(([0-9]{3}cm)|([0-9]{2}in))$'),
        fieldValidator: (value: string) => {
            if (value.indexOf('cm') !== -1) {
                value = value.replace('cm', '')
                return (parseInt(value, 10) > 149) && (parseInt(value, 10) < 194);
            }
            if (value.indexOf('in') !== -1) {
                value = value.replace('in', '')
                return (parseInt(value, 10) > 58) && (parseInt(value, 10) < 77);
            }
            return false;

        }
    });
    fields.set("hcl", {
        regex: new RegExp('^(#[0-9a-f]{6})$'),
        fieldValidator: (value: string) => true
    });
    fields.set("ecl", {
        regex: new RegExp('^(amb|blu|brn|gry|grn|hzl|oth)$'),
        fieldValidator: (value: string) => true
    });

    fields.set("pid", {
        regex: new RegExp('^([0-9]{9})$'),
        fieldValidator: (value: string) => true
    });

    for (const [field, {regex, fieldValidator}] of fields.entries()) {
        const value = passport[field]
        if (!value) return false
        if (!part1 && (!regex.test(value) || !fieldValidator(value))) return false

    }

    return true;
}




export default passportProcessing;
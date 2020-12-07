import * as _ from "lodash";
import { getInput } from "../../../utils";

interface PwdValidInput {
    row: string;
    part1: boolean
}

interface ExtractedInfos {
    low: number;
    high: number;
    value: string;
    password: string;
}

const passwordPhilosophy = async (part1: boolean, inputUri: string): Promise<number> => {
    const list = await getInput(inputUri);
    return list.filter(elem => isPwdValid({ row: elem, part1: part1 })).length
}


const isPwdValid = (input: PwdValidInput): boolean => {
    const { low, high, value, password } = extractInfosFromRow(input.row);
    if (input.part1) {
        const occurence = count(password, value)
        return low <= occurence && occurence <= high;
    } else {
        const lowMatched = password.charAt(+low - 1).startsWith(value);
        const highMatched = password.charAt(+high - 1).startsWith(value);
        if (lowMatched && highMatched) return false;
        if (lowMatched || highMatched) return true;
        return false;
    }

}

function extractInfosFromRow(row: string): ExtractedInfos {
    const [range, rowValue, password] = row.split(' ');
    const [min, max] = range.split('-');
    const value = rowValue.replace(':', '');
    return { low: +min, high: +max, value: value, password: password }
}

function count(str: string, chr: string): number {
    return _.countBy(str)[chr] | 0;
}

export default passwordPhilosophy;
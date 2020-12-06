import { getInput } from "../../../utils";

const reportRepair = async (part1: boolean) => {
    const string_list = await getInput('./data/report_repair.txt');

    const list = string_list.map(line => +line);
    for (let i = 0; i < list.length; i++) {
        const element1 = list[i];
        for (let j = 0; j < list.length; j++) {
            const element2 = list[j];
            if (part1) {
                if (element1 + element2 === 2020) {
                    return element1 * element2;
                }

            } else {
                for (let z = 0; z < list.length; z++) {
                    const element3 = list[z];
                    if ((element1 + element2 + element3) === 2020) {
                        return element1 * element2 * element3
                    }
                }
            }
        }

    }
}

export default reportRepair;
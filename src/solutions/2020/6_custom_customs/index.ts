import { getInput } from "../../../utils";
import * as _ from 'lodash';

const CustomCustoms = async (part1: boolean): Promise<string> => {
    const list = await getInput('./data/custom_customs.txt', '\n\n');
    if (part1) return _.sum(
        list
            .map(line => new Set(line
                            .replaceAll("\n", "")
                            .split("")
                        ).size)
                    ).toString()

    const everyoneAnsweredYes = list.map(line => {
        let answers = 0;
        const allAnswers = new Set(line.replaceAll("\n", "").split(""))
        const answersProPerson = line.split("\n").map(answers => answers.split(""));
        
        for (const answ of allAnswers) {
            let yesForEveryone = true;
            for (const answPerson of answersProPerson) {
                if (!_.includes(answPerson, answ)) {
                    yesForEveryone = false;
                    break;
                }
            }
            if (yesForEveryone) answers +=1
            yesForEveryone = true;
        }
        return answers;
    })
    

    return _.sum(everyoneAnsweredYes).toString()


}

export default CustomCustoms;
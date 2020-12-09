import { getInput } from "../../../utils"
import * as _ from "lodash";

const encodingError = async (part1: boolean, inputUri: string): Promise<string> => {
    const list = await getInput(inputUri);
    const inputs = list.map(line => parseInt(line, 10))

    const invalidInput = findInvalidInput(inputs);
    if (part1) return invalidInput.toString();

    for (let i = 0; i < inputs.length; i++) {
       for (let j = i; j < inputs.length; j++) {
          const inputSlice = inputs.slice(i, j);
          if (_.sum(inputSlice) === invalidInput) return (Math.max(...inputSlice) + Math.min(...inputSlice)).toString()
       }
        
    }
    return "0";
}

const findInvalidInput = (inputs:number[], preambleSize=25): number => {
    for (let index = 0; index < inputs.length; index++) {
        const preamble = inputs.slice(index, index+preambleSize);
        const nextInput = inputs[index+preambleSize];
        if (!isValidInput(preamble, nextInput)) {
            return nextInput;
        }
    }
    throw Error("something went wrong");
}   

const isValidInput = (preamble: number[], input: number): boolean => {
    for (const num1 of preamble) {
        for(const num2 of preamble) {
            if (num1 !== num2 && (num1+num2)===input) {
                return true
            }
        }
    }
    
    return false
}

export default encodingError;
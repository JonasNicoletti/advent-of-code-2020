import { getInput } from "../../../utils";
import * as _ from "lodash";


type Operation = "nop" | "acc" | "jmp";

interface Instruction {
    operation: Operation
    argument: number
    visited: boolean
}

interface ProgrammResult {
    accumulator: number
    terminated: boolean
}

const handheldHalting = async (part1: boolean, inputUri: string): Promise<string> => {
    const list = await getInput(inputUri);
    const instructions = list.map(line => toInstruction(line));
    const result = runProgramm(instructions, part1);
    return result.accumulator.toString()

}




const runProgramm = (instructions: Instruction[], part1: boolean): ProgrammResult => {
    let isValid = true;
    let accumulator = 0;
    let index = 0;
    while (isValid) {
        const instruction = instructions[index];
        instruction.visited = true;
        switch (instruction.operation) {
            case "nop":
                index++;
                break;
            case "acc":
                accumulator += instruction.argument;
                index++;
                break;
            case "jmp":
                index += (instruction.argument)
                break;
            default:
                break;
        }
        isValid = index < instructions.length && !instructions[index].visited

        if (!isValid && !part1 && index < instructions.length) {

            for (let i = 0; i < instructions.length; i++) {
                const instr = instructions[i];
                if (instr.operation !== "acc" && instr.visited) {
                    const copyInstructions = _.cloneDeep(instructions)
                    copyInstructions.map(ins => {
                        ins.visited = false;
                        return ins;
                    });
                    copyInstructions[i].operation = instr.operation === "nop" ? "jmp" : "nop";
                    const result = runProgramm(copyInstructions, true);
                    if (result.terminated) return result
                }
            }


        }
    }

    return { accumulator: accumulator, terminated: index === instructions.length }
}


const toInstruction = (line: string): Instruction => {
    const [op, arg] = line.split(" ");
    return { operation: op as Operation, argument: parseInt(arg, 10), visited: false };
}


export default handheldHalting;
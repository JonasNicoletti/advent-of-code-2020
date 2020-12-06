import { getInput } from "../../../utils";

const TREE = "#";


interface CountInput {
    right: number,
    down: number
}

const tobogganTrajectory = async (part1: boolean): Promise<number> => {

    const list = await getInput('./data/toboggan_trajectory.txt');

    let countInputs: Array<CountInput> = [{ right: 3, down: 1 }];
    var countTree = 0;
    if (!part1) {
        countInputs = [{ right: 1, down: 1 }, { right: 3, down: 1 }, { right: 5, down: 1 }, { right: 7, down: 1 }, { right: 1, down: 2 },]
        countTree = 1;
    }

    for (const countInput of countInputs) {
        if (part1) {
            countTree = countTree + count(countInput, list)
        } else {
            countTree = countTree * count(countInput, list)
        }

    }
    return countTree;
}


const count = (input: CountInput, list: Array<string>): number => {
    var { right, down } = input

    var max_x = list[0].length;
    var position: string;
    var treeCount = 0;
    for (let y = input.down; y < list.length; y += down) {
        position = list[y][right]
        if (position.startsWith(TREE)) {
            treeCount += 1;
        }
        right = (right + input.right) % max_x
    }
    return treeCount;
}

export default tobogganTrajectory;
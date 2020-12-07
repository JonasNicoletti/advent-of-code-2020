import * as _ from "lodash";
import { getInput } from "../../../utils";

const TRANSALTION = new Map<string, string>([["F","0"], ["B","1"], ["R", "1"], ["L", "0"]]);
const FACTOR = 8;

const binaryBoarding = async (part1: boolean, inputUri: string): Promise<number> => {
    const list = await getInput(inputUri);
    
    const seatIds = list.map(passport => convertToSeatId(passport));
    const max = _.max(seatIds);
    if (part1 && max) return max;

    const min = _.min(seatIds);
    if (min) {
        const allSeatsIds = _.range(min, max);
        const mySeatId = _.difference(allSeatsIds, seatIds)[0];
        return mySeatId;
    }
    return 0
}

const convertToSeatId = (boardingPass: string): number => {
    let seatId = ""
    for (var i = 0; i < boardingPass.length; i++) {
        seatId += TRANSALTION.get(boardingPass.charAt(i))
    }
    const row = parseInt(seatId.substr(0, 7), 2);
    const column = parseInt(seatId.substr(7, 10), 2);
    return row*FACTOR + column;
}

export default binaryBoarding;

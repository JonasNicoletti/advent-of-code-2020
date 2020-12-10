import { getInput } from "../../../utils";

// Holy cache! missing python so much :(
const cache = new Map<number, number>();

const adapterArray = async (part1: boolean, inputUri: string): Promise<string> => {
    const list = await getInput(inputUri);
    let adapters = list.map(line => parseInt(line, 10)).sort((a,b) => a-b);

    adapters = [...adapters, Math.max(...adapters) + 3]

    if (part1)  {
        const jolts = new Map();
        let current = 0;
        for (const adapter of adapters) {
            const jolt = adapter - current;
            const newValue = jolts.get(jolt) + 1 || 1;
            jolts.set(jolt, newValue);
            current = adapter;
        }
        return (jolts.get(1) * jolts.get(3)).toString();
    }
    
    return buildChains(adapters, 0).toString();
}


const findNextValues = (value: number, list: number[]) => {
    return list.filter(elem => elem - value < 4)
}

const buildChains = (list: number[], value: number): number => {
    if (cache.has(value)) return cache.get(value) || 0;
    if (list.length === 0) {
        return 1;
    }
    const nextValues = findNextValues(value, list);
    if (nextValues.length === 0) {
        return 0;
    }
    const result =  nextValues.reduce((val, current) => {
        const newList = [...list]
        newList.splice(list.indexOf(current), 1)
        val += buildChains(newList, current)
        return val;
    }, 0);
    cache.set(value, result);

    return result;
   
}

export default adapterArray;
import { getInput } from "../../../utils";
import * as _ from 'lodash';

const handyHaversacks = async (part1: boolean): Promise<string> => {
    const list = await getInput('./data/handy_haversacks.txt');
    const myBag = "shiny gold";

    const bagRules = list.map(entry => createRule(entry));
    let validBagsCount = 0;
    if (part1) {
        for (const rule of bagRules) {
            if (isValidBag(rule.bags, bagRules)) validBagsCount++;
        }
        return validBagsCount.toString()
    };
    const myBagRule = getRule(myBag, bagRules);
    return countBags(myBagRule, bagRules).toString()
}

interface BagRule {
    bagType: string;
    bags: Bag[];
}

interface Bag {
    bagType: string;
    count: number;
}

const countBags = (bags: Bag[], rules: BagRule[]): number => {
    return bags.reduce((acc, bag) => {
        const bagRule = getRule(bag.bagType, rules)
        return acc + bag.count + bag.count * countBags(bagRule, rules)
    }, 0)
}

const isValidBag = (bags: Bag[], rules: BagRule[]): boolean => {
    if (_.some(bags, bag => bag.bagType.startsWith("shiny gold"))) return true
    if (bags.length === 0) return false
    bags = _.remove(bags, bag => bag.count > 0);
    const newList = bags.flatMap(bag => getRule(bag.bagType, rules))
    return isValidBag(newList, rules)
}

const getRule = (bagType: string, list: BagRule[]): Bag[] => {
    const bagIndex = list.findIndex(entry => entry.bagType.startsWith(bagType))
    if (bagIndex === -1) return []
    return list[bagIndex].bags

}

const createRule = (entry: string): BagRule => {
    const bagRegex = new RegExp(`^([a-zA-z]+ [a-zA-z]+) bags contain (.*)$`);
    const bagdRegex = new RegExp(`([0-9]+) ([a-zA-z]+ [a-zA-z]+) [a-z]+`);

    let [, bag, rawBags] = entry.match(bagRegex);
    let rawBagsist = rawBags.replace('.', '').split(',');

    const bags = rawBagsist.reduce((filtered, rawBag) => {
        const rawBagMatch = rawBag.match(bagdRegex);
        if (rawBagMatch) {
            const bag = {
                bagType: rawBagMatch[2],
                count: +rawBagMatch[1]
            }
            filtered.push(bag);
        }
        return filtered;
    }, [] as Bag[]);

    return { bagType: bag, bags: bags }

}

export default handyHaversacks;
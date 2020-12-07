import { TaskProps } from "../components/Task";
import { YearItemProps } from "../ui/YearItem";


export async function getInput(file: string, separator: string = '\n'): Promise<string[]> {
    const response = await fetch(process.env.PUBLIC_URL + file);
    const text = await response.text()
    return text.split(separator);
}

export async function getFileAsText(uri: string, isInternal = false): Promise<string> {
    uri = isInternal ? process.env.PUBLIC_URL + uri : uri
    const response = await fetch(uri);
    let text = await response.text()
    return text;
}

export function getTask(year: string, day: string, years: YearItemProps[]): TaskProps | undefined {
    return years.find(y => y.id === year)?.tasks.find(task => task.id === day)
};
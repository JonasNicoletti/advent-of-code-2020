

export async function getInput(file: string, separator: string = '\n'): Promise<string[]> {
    const response = await fetch(file);
    const text = await response.text()
    return text.split(separator);
}

export async function getFileAsText(uri: string): Promise<string> {
    const response = await fetch(uri);
    let text = await response.text()
    return text;
}
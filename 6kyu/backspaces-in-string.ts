export function cleanString(s: string): string {
    // ... your code ...

    let regex = /[^#]#/g;
    let newStr = s;
    while (regex.test(newStr)) {
        newStr = newStr.replace(regex, '');
    }

    if (/#/g.test(newStr)) {
        newStr = newStr.replace(/#/g, '');
    }

    return newStr;
}

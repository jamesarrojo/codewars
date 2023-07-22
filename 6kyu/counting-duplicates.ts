export function duplicateCount(text: string): number {
    //...
    //return text.length - (new Set(text.toLowerCase().split(''))).size

    let count = 0;

    let arr = text.toLowerCase().split('').sort();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] && arr[i] != arr[i - 1]) {
            count++;
        }
    }

    return count;
}

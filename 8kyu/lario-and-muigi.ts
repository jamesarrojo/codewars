export function pipeFix(numbers: number[]): number[] {
    let arr: number[] = [];
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; ++i) {
        arr.push(i);
    }
    return arr;
}

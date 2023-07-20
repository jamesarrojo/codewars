export function narcissistic(value: number): boolean {
    // your code here
    let stringNum = value.toString();
    let power = stringNum.length;
    let sum = 0;
    for (let i = 0; i < power; i++) {
        sum += Number(stringNum[i]) ** power;
    }
    return value === sum;
}

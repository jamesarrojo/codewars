export function countBits(n: number): number {
    // Program Me

    if (n === 0) return 0;

    let arrNum: number[] = [];
    let num = n;
    while (num >= 1) {
        arrNum.unshift(num % 2);
        num = Math.floor(num / 2);
    }

    return arrNum.reduce((a, b) => a + b);
}

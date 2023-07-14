export function descendingOrder(n: number): number {
    // your code here
    return Number(n.toString().split('').sort().reverse().join(''));
}

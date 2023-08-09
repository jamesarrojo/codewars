export function noBoringZeros(n: number): number {
    let str = n.toString();
    return Number(str.replace(/0*$/g, ''));
}

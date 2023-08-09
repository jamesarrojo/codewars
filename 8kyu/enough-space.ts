export function enough(cap: number, on: number, wait: number): number {
    // your code here

    return cap - on >= wait ? 0 : wait - (cap - on);
}

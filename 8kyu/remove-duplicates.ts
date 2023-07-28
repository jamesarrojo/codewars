export const distinct = (a: number[]): number[] => {
    let set = new Set(a);
    let arr: number[] = [];

    set.forEach((e) => arr.push(e));
    return arr;
};

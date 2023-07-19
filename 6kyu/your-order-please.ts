export function order(words: string): string {
    // ...
    let ordered: string[] = [];
    let unordered = words.split(' ');
    for (let n = 1; n <= unordered.length; n++) {
        unordered.forEach((word) => {
            if (word.includes(n.toString())) {
                ordered.push(word);
            }
        });
    }

    return ordered.join(' ');
}

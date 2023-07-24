/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
    let outputArr: number[] = [];
    let value = 0;
    for (let i = 0; i < data.length; i++) {
        switch (data[i]) {
            case 'i':
                value++;
                break;
            case 'd':
                value--;
                break;
            case 's':
                value = value ** 2;
                break;
            case 'o':
                outputArr.push(value);
        }
    }

    return outputArr;
}

export class G964 {
    public static digPow = (n: number, p: number) => {
        // your code
        let strNumArray = n.toString().split('');
        let pow = p - 1;
        let sum = strNumArray
            .map((num) => {
                pow++;
                return Number(num) ** pow;
            })
            .reduce((a, b) => a + b);

        return sum % n === 0 ? sum / n : -1;
    };
}

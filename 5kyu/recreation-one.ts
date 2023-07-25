export const listSquared = (m: number, n: number): number[][] => {
    // your code
    let arrayResult: number[][] = [];
    for (let num = m; num <= n; num++) {
        let sum = 0;

        // would loop only up until the sqrt of the number because beyond that, the divisors will start repeating
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                // divisor here is the other pair of the divisor (e.g for 36, 1 and 36, 2 and 18, and so on...)
                const divisor = num / i;
                sum += i === divisor ? i * i : i * i + divisor * divisor;
            }
        }

        let squareRoot = Math.sqrt(sum);

        if (squareRoot === Math.floor(squareRoot)) {
            arrayResult.push([num, sum]);
        }
    }

    return arrayResult;
};

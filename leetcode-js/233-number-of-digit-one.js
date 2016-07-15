/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let ones = 0;

    for (let m = 1; m <= n; m *= 10) {
        const a = Math.floor(n / (m * 10)); // digits on the left of current
        const b = Math.floor(n / m) - a * 10; // current digit
        const c = n % m; // digits on the right of current

        ones += a * m;

        switch (b) {
        case 0:
            break;
        case 1:
            ones += c + 1;
            break;
        default:
            ones += m;
            break;
        }
    }
    return ones;
};

var countDigitOne2 = function(n) {
    let ones = 0;
    for (let m = 1; m <= n; m *= 10) {
        const a = Math.floor(n / m);
        const b = n % m;

        // a + 8 / 10 can easily handle a is 0, 1, and >= 2 cases
        ones += Math.floor((a + 8) / 10) * m + (a % 10 === 1) * (b + 1);
    }
    return ones;
};

console.log(countDigitOne(100));
console.log(countDigitOne2(100));

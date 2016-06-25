/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let ones = 0;
    for (let m = 1; m <= n; m *= 10) {
        const a = Math.floor(n / m);
        const b = n % m;
        ones += Math.floor((a + 8) / 10) * m + (a % 10 === 1) * (b + 1);
    }
    return ones;
};

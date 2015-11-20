var floor = Math.floor;

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    var ones = 0;
    for (var m = 1; m <= n; m *= 10) {
        var a = floor(n / m);
        var b = n % m;
        ones += floor((a + 8) / 10) * m + (a % 10 === 1) * (b + 1);
    }
    return ones;
};

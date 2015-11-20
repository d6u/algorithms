/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    while (n % 4 === 0) {
        n = Math.floor(n / 4);
    }
    if (n % 8 === 7) {
        return 4;
    }
    var min2 = false;
    for (var i = 2; i <= n; i++) {
        if (i > Math.floor(n / i)) {
            i = n;
        }
        var e = 0;
        while (n % i === 0) {
            n = Math.floor(n / i);
            e += 1;
        }
        if (e % 2 && i % 4 == 3) {
            return 3;
        }
        min2 |= e % 2;
    }
    return 1 + min2;
};

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    'use strict';

    while (n % 4 === 0) {
        n /= 4;
    }

    if (n % 8 === 7) {
        return 4;
    }

    for (let a = 0; a * a <= n; a += 1) {
        const b = Math.floor(Math.sqrt(n - a * a));
        if (a * a + b * b === n) {
            return Number(!!a) + Number(!!b);
        }
    }

    return 3;
};

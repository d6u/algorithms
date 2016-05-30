/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
    'use strict';

    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return k;
    }

    let differentColors = k * (k - 1);
    let sameColors = k;

    for (let i = 2; i < n; i += 1) {
        const tmp = differentColors;
        differentColors = (tmp + sameColors) * (k - 1);
        sameColors = tmp;
    }

    return differentColors + sameColors;
};

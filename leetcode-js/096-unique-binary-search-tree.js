/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    'use strict';

    const count = [];
    count[0] = 1;
    count[1] = 1;

    for (let i = 2; i <= n; i += 1) {
        count[i] = 0;
        for (let j = 0; j < i; j += 1) {
            count[i] += count[j] * count[i - j - 1];
        }
    }

    return count[n];
};

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    'use strict';

    const dp = Array(n + 1).fill(Infinity);

    for (let i = 1; i * i <= n; i += 1) {
        dp[i * i] = 1;
    }

    for (let i = 1; i <= n; i += 1) {
        for (let j = 1; i + j * j <= n; j += 1) {
            dp[i + j * j] = Math.max(dp[i] + 1, dp[i + j * j]);
        }
    }

    return dp[n];
};

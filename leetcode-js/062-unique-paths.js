/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    'use strict';

    const dp = [];

    for (let i = 0; i < m; i += 1) {
        dp[i] = [];
        for (let j = 0; j < n; j += 1) {
            if (i === 0) {
                dp[0][j] = 1;
            } else if (j === 0) {
                dp[i][0] = 1;
            } else {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }

    return dp[m-1][n-1];
};

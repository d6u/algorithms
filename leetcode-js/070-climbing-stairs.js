/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    'use strict';

    const dp = [1, 1];

    for (let i = 1; i < n; i += 1) {
        dp[i+1] = dp[i] + dp[i-1];
    }

    return dp[n]
};

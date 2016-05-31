/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    'use strict';

    const dp = [];

    for (let i = 0; i < s.length + 1; i += 1) {
        dp[i] = i - 1;
    }

    for (let i = 0; i < s.length; i += 1) {
        for (let j = 0; i - j >= 0 && i + j < s.length && s[i-j] === s[i+j]; j += 1) {
            dp[i + j + 1] = Math.min(dp[i + j + 1], dp[i-j] + 1);
        }

        for (let j = 1; i - j + 1 >= 0 && i + j < s.length && s[i-j+1] === s[i+j]; j += 1) {
            dp[i + j + 1] = Math.min(dp[i + j + 1], dp[i-j+1] + 1);
        }
    }

    return dp[s.length];
};

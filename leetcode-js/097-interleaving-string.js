/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    'use strict';

    if (s1.length + s2.length !== s3.length) {
        return false;
    }

    const dp = [];

    for (let i = 0; i < s1.length + 1; i += 1) {
        dp[i] = [];
    }

    for (let i = 0; i < s1.length + 1; i += 1) {
        for (let j = 0; j < s2.length + 1; j += 1) {
            if (i === 0 && j === 0) {
                dp[0][0] = true;
            } else if (i === 0) {
                dp[0][j] = dp[0][j-1] && s2[j-1] === s3[j-1];
            } else if (j === 0) {
                dp[i][0] = dp[i-1][0] && s1[i-1] === s3[i-1];
            } else {
                dp[i][j] = (dp[i-1][j] && s1[i-1] === s3[i+j-1]) || (dp[i][j-1] && s2[j-1] === s3[i+j-1]);
            }
        }
    }

    return dp[s1.length][s2.length];
};

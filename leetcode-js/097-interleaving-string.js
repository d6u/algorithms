/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false;
    }

    // 1. dp[0][0] means 0 letters from both s1 and s2
    const dp = [];

    for (let i = 0; i < s1.length + 1; i += 1) {
        dp[i] = [];
    }

    // 2. For each letter in s1, loop over s2 once
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

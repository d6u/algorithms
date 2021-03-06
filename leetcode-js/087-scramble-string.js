/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    const dp = [];
    const len = s1.length;

    for (let i = 0; i < len; i += 1) {
        dp[i] = [];
        for (let j = 0; j < len; j += 1) {
            dp[i][j] = [];
            for (let k = 0; k < len + 1; k += 1) {
                dp[i][j][k] = false;
            }
        }
    }

    for (let i = len - 1; i >= 0; i -= 1) {
        for (let j = len - 1; j >= 0; j -= 1) {
            for (let k = 1; k <= len - Math.max(i, j); k += 1) {
                if (s1.substring(i, i + k) === s2.substring(j, j + k)) {
                    // 1. dp[i][j][k] means, substring of s1 starts at i,
                    // and substrings of s2 starts at j, both with length of k,
                    // is the same scrambled string
                    dp[i][j][k] = true;
                } else {
                    for (let l = 1; l < k; l += 1) {
                        // 2. If substrings of s1 and s2 are not equal directly,
                        // check if they are scrambled strings
                        if ((dp[i][j][l] && dp[i+l][j+l][k-l]) ||
                            (dp[i][j+k-l][l] && dp[i+l][j][k-l])) {

                            dp[i][j][k] = true;
                            break;
                        }
                    }
                }
            }
        }
    }

    return dp[0][0][len];
};

// console.log(isScramble('a', 'a'));
console.log(isScramble('great', 'rgtae'));

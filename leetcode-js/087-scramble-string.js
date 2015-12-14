/**
 * @param  {string}  s1
 * @param  {string}  s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    'use strict';

    let n = s1.length;
    let dp = makeArray(n, () => makeArray(n, () => makeArray(n+1, false)));

    for (let i = n-1; i >= 0; i--) {
        for (let j = n-1; j >= 0; j--) {
            for (let k = 1; k <= n - Math.max(i, j); k++) {

                if (s1.substring(i, i+k) === s2.substring(j, j+k)) {
                    dp[i][j][k] = true;
                    continue;
                }

                for (let l = 1; l < k; l++) {
                    if ((dp[i][j][l] && dp[i+l][j+l][k-l]) ||
                        (dp[i][j+k-l][l] && dp[i+l][j][k-l]))
                    {
                        dp[i][j][k] = true;
                        break;
                    }
                }
            }
        }
    }

    return dp[0][0][n];
};

function makeArray(size, filler) {
    'use strict';
    const arr = Array(size);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = typeof filler === 'function' ? filler() : filler;
    }
    return arr;
}

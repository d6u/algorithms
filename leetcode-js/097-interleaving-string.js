/**
    tags: dynamic programing, string

    Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

    For example,
    Given:
    s1 = "aabcc",
    s2 = "dbbca",

    When s3 = "aadbbcbcac", return true.
    When s3 = "aadbbbaccc", return false.
 */

/**
 * @param  {string}  s1
 * @param  {string}  s2
 * @param  {string}  s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    'use strict';

    if (s3.length !== s1.length + s2.length) {
        return false;
    }

    const table = makeArray(s1.length + 1, () => makeArray(s2.length + 1, false));

    for (let i = 0; i < s1.length + 1; i++) {
        for (let j = 0; j < s2.length + 1; j++) {
            if (i === 0 && j === 0) {
                table[i][j] = true;
            } else if (i === 0) {
                table[i][j] = (table[i][j-1] && s2[j-1] === s3[i+j-1]);
            } else if (j === 0) {
                table[i][j] = (table[i-1][j] && s1[i-1] === s3[i+j-1]);
            } else {
                table[i][j] = (table[i-1][j] && s1[i-1] === s3[i+j-1]) ||
                    (table[i][j-1] && s2[j-1] === s3[i+j-1]);
            }
        }
    }

    return table[s1.length][s2.length];
};

function makeArray(size, filler) {
    'use strict';
    let arr = Array(size);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = typeof filler === 'function' ? filler() : filler;
    }
    return arr;
}

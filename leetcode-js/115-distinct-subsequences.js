/**
    tags: dynamic programming, string

    Given a string S and a string T, count the number of distinct subsequences of T in S.

    A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

    Here is an example:
    S = "rabbbit", T = "rabbit"

    Return 3.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    'use strict';

    const n = s.length;
    const m = t.length;

    if (m > n) {
        return 0;
    }

    const path = makeArray(m + 1, 0);
    path[0] = 1;

    for (let j = 0; j < n; j++) {
        for (let i = m - 1; i >= 0; i--) {
            path[i+1] += t[i] === s[j] ? path[i] : 0;
        }
    }

    return path[path.length-1];
};

function makeArray(size, filler) {
    'use strict';
    let arr = Array(size);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = typeof filler === 'function' ? filler() : filler;
    }
    return arr;
}

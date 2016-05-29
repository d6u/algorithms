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

    const path = Array(m + 1).fill(0);

    path[0] = 1;

    for (let i = 0; i < n; i += 1) {
        for (let j = m - 1; j >= 0; j -= 1) {
            path[j+1] += t[j] === s[i] ? path[j] : 0;
        }
    }

    return path[m];
};

console.log(numDistinct('rabbbit', 'rabbit'));

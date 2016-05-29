/**
    tags: hash table, two pointers, string

    Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

    For example,
    S = "ADOBECODEBANC"
    T = "ABC"
    Minimum window is "BANC".

    Note:
    If there is no such window in S that covers all characters in T, return the empty string "".

    If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    'use strict';

    const sl = s.length;
    const tl = t.length;
    const needToFind = Array(122).fill(0);

    for (let i = 0; i < tl; i++) {
        needToFind[charToInt(t[i])] += 1;
    }

    const hasFound = Array(122).fill(0);
    let minWindowLen = sl;
    let minWindowBegin = 0;
    let count = 0;

    for (let begin = 0, end = 0; end < sl; end += 1) {
        const endCharInt = charToInt(s[end]);

        if (needToFind[endCharInt] === 0) {
            continue;
        }

        hasFound[endCharInt] += 1;

        if (hasFound[endCharInt] <= needToFind[endCharInt]) {
            count += 1;
        }

        if (count === tl) {
            let beginCharInt = charToInt(s[begin]);

            while (needToFind[beginCharInt] === 0 || hasFound[beginCharInt] > needToFind[beginCharInt]) {
                if (hasFound[beginCharInt] > needToFind[beginCharInt]) {
                    hasFound[beginCharInt] -= 1;
                }
                begin += 1;
                beginCharInt = charToInt(s[begin]);
            }

            const windowLen = end - begin + 1;

            if (windowLen < minWindowLen) {
                minWindowBegin = begin;
                minWindowLen = windowLen;
            }
        }
    }

    return count === tl ? s.substr(minWindowBegin, minWindowLen) : '';
};

function charToInt(c) {
  return c.charCodeAt(0) - 65;
}

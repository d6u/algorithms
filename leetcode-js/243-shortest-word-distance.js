/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    'use strict';

    let n = words.length;
    let idx1 = -1;
    let idx2 = -1;
    let dist = Number.MAX_VALUE;

    for (let i = 0; i < n; i++) {
        if (words[i] === word1) {
            idx1 = i;
        } else if (words[i] === word2) {
            idx2 = i;
        }
        if (idx1 !== -1 && idx2 !== -1) {
            dist = Math.min(dist, Math.abs(idx1 - idx2));
        }
    }

    return dist;
};

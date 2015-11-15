/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    'use strict';

    const counts = new Map();

    for (let char of s) {
        let count = counts.get(char);
        counts.set(char, count == null ? 1 : count + 1);
    }

    let hasOdd = false;

    for (let count of counts.values()) {
        if (count % 2 !== 0) {
            if (hasOdd) {
                return false;
            }
            hasOdd = true;
        }
    }

    return true;
};

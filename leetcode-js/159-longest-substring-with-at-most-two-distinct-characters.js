/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    'use strict';

    let left = 0;
    let right = -1;
    let maxLen = 0;

    for (let i = 1; i < s.length; i += 1) {
        if (s[i-1] !== s[i]) {
            if (right >= 0 && s[i] !== s[right]) {
                maxLen = Math.max(maxLen, i - left);
                left = right + 1;
            }

            right = i - 1;
        }
    }

    return Math.max(s.length - left, maxLen);
};

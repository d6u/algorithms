/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    'use strict';

    if (s.length === 0) {
        return 0;
    }

    const map = new Map();
    let max = 0;
    let j = 0;

    for (let i = 0; i < s.length; i += 1) {
        if (map.has(s[i])) {
            j = Math.max(j, map.get(s[i]) + 1);
        }
        map.set(s[i], i);
        max = Math.max(max, i - j + 1);
    }

    return max;
};

console.log(lengthOfLongestSubstring("pwwkew"));

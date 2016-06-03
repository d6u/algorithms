/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0;
    }

    const map = new Map();
    let max = 0;
    let j = 0;

    for (const [i, char] of s.split('').entries()) {
        if (map.has(char)) {
            j = Math.max(j, map.get(char) + 1);
        }
        map.set(char, i);
        max = Math.max(max, i - j + 1);
    }

    return max;
};

console.log(lengthOfLongestSubstring("pwwkew"));

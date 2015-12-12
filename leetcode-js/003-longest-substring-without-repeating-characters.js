/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0;
    }

    var map = new Map();
    var max = 0;
    var j = 0;

    for (var i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            j = Math.max(j, map.get(s[i]) + 1);
        }
        map.set(s[i], i);
        max = Math.max(max, i - j + 1);
    }

    return max;
};

console.log(lengthOfLongestSubstring("pwwkew"));

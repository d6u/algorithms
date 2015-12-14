/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    var l = 0;
    var r = -1;
    var len = 0;
    var n = s.length;

    for (var i = 1; i < n; i++) {
        if (s[i] === s[i-1]) {
            continue;
        }

        if (r >= 0 && s[i] !== s[r]) {
            len = Math.max(len, i - l);
            l = r + 1;
        }

        r = i - 1;
    }

    return Math.max(n - l, len);
};

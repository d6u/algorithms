/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    // left and right boundary of the substring
    let left = 0;
    let right = -1;

    let maxLen = 0;

    for (let i = 1; i < s.length; i += 1) {
        if (s[i-1] !== s[i]) {
            // When current char doesn't equal to last char,
            // check whether current char equal to the right boundary char
            if (right >= 0 && s[i] !== s[right]) {
                // if current char not equal to right boundary char,
                // update max length
                // and update left boundary to shortern the substring
                maxLen = Math.max(maxLen, i - left);
                left = right + 1;
            }

            right = i - 1;
        }
    }

    return Math.max(s.length - left, maxLen);
};

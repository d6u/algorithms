/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let result = 0;
    let i = 0;

    while (i < s.length) {
        result = result * 26 + (s[i].charCodeAt() - 'A'.charCodeAt() + 1);
        i += 1;
    }

    return result;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) {
        return '';
    }

    strs.sort();

    var result = '';

    // Just compare first and last string after sort
    for (var i = 0; i < strs[0].length; i += 1) {
        if (strs[0][i] === strs[strs.length-1][i]) {
            result += strs[0][i];
        } else {
            return result;
        }
    }

    return result;
};

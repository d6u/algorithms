/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) {
        return '';
    }

    var pre = strs[0];
    var i = 1;

    while (i < strs.length) {
        while (strs[i].indexOf(pre) !== 0) {
            pre = pre.substring(0, pre.length - 1);
        }
        i += 1;
    }

    return pre;
};

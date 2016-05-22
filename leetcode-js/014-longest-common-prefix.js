/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    'use strict';

    if (!strs.length) {
        return '';
    }

    let pre = strs[0];
    let i = 1;

    while (i < strs.length) {
        while (strs[i].indexOf(pre) !== 0) {
            pre = pre.substring(0, pre.length - 1);
        }
        i += 1;
    }

    return pre;
};

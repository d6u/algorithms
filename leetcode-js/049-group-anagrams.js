/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    'use strict';

    const map = new Map();

    for (let str of strs) {
        let newStr = str.split('').sort().join('');
        let arr = map.get(newStr);
        map.set(newStr, arr == null ? [str] : arr.concat([str]));
    }

    return Array.from(map.values()).map(row => row.sort());
};

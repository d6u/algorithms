/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    'use strict';

    const map = new Map();

    for (let str of strs) {
        const key = str.split('').sort().join('');
        const list = map.get(key);
        if (list == null) {
            map.set(key, [str]);
        } else {
            list.push(str);
        }
    }

    return Array.from(map.values()).map(list => list.sort());
};

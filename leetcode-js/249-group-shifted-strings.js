/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    'use strict';

    const map = new Map();

    for (let str of strings) {
        let codes = shiftCodes(str);
        let arr = map.get(codes);
        if (arr == null) {
            map.set(codes, [str]);
        } else {
            arr.push(str);
        }
    }

    return Array.from(map.values()).map(row => row.sort());
};

function shiftCodes(str) {
    'use strict';

    let codes = '';

    for (let i = 1; i < str.length; i++) {
        codes += ((str[i].charCodeAt(0) - str[i-1].charCodeAt(0) + 26) % 26).toString();
    }

    return codes;
}

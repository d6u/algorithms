/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    'use strict';

    const map = new Map();

    for (const str of strings) {
        const codes = getShiftCode(str);
        const arr = map.get(codes);
        if (arr) {
            arr.push(str);
        } else {
            map.set(codes, [str]);
        }
    }

    return Array.from(map.values()).map(row => row.sort())
};

function getShiftCode(str) {
    'use strict';

    let codes = '';

    for (let i = 1; i < str.length; i += 1) {
        const shift = (str.charCodeAt(i) - str.charCodeAt(i-1) + 26) % 26;
        codes += shift;
    }

    return codes;
}

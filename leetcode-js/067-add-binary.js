/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    'use strict';

    let carry = 0;
    let result = '';

    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i -= 1, j -= 1) {
        const valA = i >= 0 ? parseInt(a[i]) : 0;
        const valB = j >= 0 ? parseInt(b[j]) : 0;
        const remainder = (valA + valB + carry) % 2;
        carry = Math.floor((valA + valB + carry) / 2);
        result = remainder.toString() + result;
    }

    if (carry === 1) {
        result = '1' + result;
    }

    return result;
};

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    'use strict';

    if (numerator === 0) {
        return '0';
    }

    const result = [];

    if (numerator < 0 ^ denominator < 0) {
        result.push('-');
    }

    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);

    result.push(Math.floor(numerator / denominator));

    if (numerator % denominator === 0) {
        return result.join('');
    }

    result.push('.');

    const map = new Map();
    let remainder = numerator % denominator;

    while (remainder) {
        if (map.has(remainder)) {
            result.splice(map.get(remainder), 0, '(');
            result.push(')');
            break;
        }

        map.set(remainder, result.length);

        remainder *= 10;

        result.push(Math.floor(remainder / denominator));

        remainder %= denominator;
    }

    return result.join('');
};

console.log(fractionToDecimal(1, 5));
// console.log(fractionToDecimal(-2147483648, 1));

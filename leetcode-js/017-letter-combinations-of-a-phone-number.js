var table = [
    ' ',
    '',     'abc', 'def',
    'ghi',  'jkl', 'mno',
    'pqrs', 'tuv', 'wxyz'
];

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) {
        return [];
    }

    const result = [];
    findCombination('', digits, 0, result);
    return result;
};

function findCombination(str, digits, i, result) {
    'use strict';

    if (i >= digits.length) {
        result.push(str);
        return;
    }

    const letters = table[digits[i]];

    if (!letters.length) {
        findCombination(str, digits, i + 1, result);
        return;
    }

    for (let j = 0; j < letters.length; j += 1) {
        findCombination(str + letters[j], digits, i + 1, result);
    }
}

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
    if (digits.length === 0) return [];
    var results = [];
    findletterCombinations(digits, 0, '', results);
    return results;
};

function findletterCombinations(digits, index, combo, results) {
    if (combo.length === digits.length) {
        results.push(combo);
        return;
    }

    var letters = table[parseInt(digits[index])];
    var i;

    for (i = 0; i < letters.length; i++) {
        findletterCombinations(
            digits,
            index + 1,
            combo + letters[i],
            results);
    }
}

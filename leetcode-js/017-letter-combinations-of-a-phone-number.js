/**
 * @param  {string}   digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits.length) return [];

  var table = [' ', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  var results = [];
  findLetterCombo(digits, 0, table, '', results);
  return results;
};

function findLetterCombo(digits, index, table, combo, results) {
  if (index === digits.length) {
    results.push(combo);
    return;
  }

  var letters = table[parseInt(digits[index])];

  for (var i = 0; i < letters.length; i++) {
    findLetterCombo(digits, index + 1, table, combo + letters[i], results);
  }
}

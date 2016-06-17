/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
    const result = [];
    getResult(word, 0, '', 0, result);
    return result;
};

function getResult(word, index, currentStr, count, result) {
    if (index === word.length) {
        if (count > 0) {
            currentStr += count.toString();
        }
        result.push(currentStr);
    } else {
        getResult(word, index + 1, currentStr, count + 1, result);
        getResult(word, index + 1, currentStr + (count > 0 ? count : '') + word[index], 0, result);
    }
}

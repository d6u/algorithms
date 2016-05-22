/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (!n) {
        return [];
    }

    const result = [];
    findResult('', 0, 0, n, result);
    return result;
};

function findResult(str, left, right, n, result) {
    if (str.length === n * 2) {
        result.push(str);
        return;
    }

    if (left < n) {
        findResult(str + '(', left + 1, right, n, result);
    }

    if (left > right) {
        findResult(str + ')', left, right + 1, n, result);
    }
}

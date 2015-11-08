/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var results = [];
    if (n === 0) {
        return results;
    }
    generateSolution('', 0, 0, n, results);
    return results;
};

function generateSolution(str, l, r, n, results) {
    if (str.length === n * 2) {
        results.push(str);
        return;
    }

    if (l < n) {
        generateSolution(str+'(', l+1, r, n, results);
    }

    if (l > r) {
        generateSolution(str+')', l, r+1, n, results);
    }
}

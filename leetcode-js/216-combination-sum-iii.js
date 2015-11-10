/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var results = [];
    getResults(1, k, n, [], 0, results);
    return results;
};

function getResults(index, k, n, solution, sum, results) {
    if (solution.length === k) {
        if (sum === n) {
            results.push(solution);
        }
        return;
    }

    if (sum > n) {
        return;
    }

    var i;

    for (i = index; i < 10; i++) {
        getResults(i+1, k, n, solution.concat(i), sum+i, results);
    }
}

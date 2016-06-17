/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const results = [];
    getResults(1, n, k, [], results);
    return results;
};

function getResults(index, n, k, solution, results) {
    if (solution.length === k) {
        results.push(solution);
        return;
    }

    for (let i = index; i <= n; i++) {
        getResults(i+1, n, k, solution.concat([i]), results);
    }
}

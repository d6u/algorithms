/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = [];
    getResult(k, n, 1, 0, [], result);
    return result;
};

function getResult(k, n, index, sum, solution, result) {
    if (solution.length === k) {
        if (sum === n) {
            result.push(solution);
        }
        return;
    }

    if (sum >= n) {
        return;
    }

    for (let i = index; i < 10; i += 1) {
        getResult(k, n, i + 1, sum + i, solution.concat(i), result);
    }
}

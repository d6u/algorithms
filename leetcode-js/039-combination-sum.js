/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    var results = [];
    getResults(candidates, 0, target, [], 0, results);
    return results;
};

function getResults(candidates, n, target, solution, sum, results) {
    if (sum === target) {
        results.push(solution);
        return;
    }

    if (sum > target) {
        return;
    }

    var i;

    for (i = n; i < candidates.length; i++) {
        if (sum + candidates[i] <= target) {
            getResults(
              candidates,
              i,
              target,
              solution.concat([candidates[i]]),
              sum + candidates[i],
              results);
        }
    }
}

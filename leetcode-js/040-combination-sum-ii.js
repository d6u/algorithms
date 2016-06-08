/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    const result = [];
    _combinationSum(candidates, 0, 0, target, [], result);
    return result;
};

function _combinationSum(candidates, index, sum, target, solution, result) {
    if (sum === target) {
        result.push(solution);
        return;
    }

    if (sum > target) {
        return;
    }

    for (let i = index; i < candidates.length; i += 1) {
        if (i > index && candidates[i] === candidates[i-1]) {
            continue;
        }

        _combinationSum(
            candidates,
            i + 1,
            sum + candidates[i],
            target,
            solution.concat(candidates[i]),
            result
        );
    }
}

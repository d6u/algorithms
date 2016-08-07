/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    const result = [];
    solve(candidates, target, 0, [], result);
    return result;
};

function solve(candidates, target, begin, solution, result) {
    if (!target) {
        result.push(solution.slice());
        return;
    }

    for (let i = begin; i < candidates.length && target >= candidates[i]; i += 1) {
        if (i === begin || candidates[i] !== candidates[i-1]) {
            solution.push(candidates[i]);
            solve(candidates, target - candidates[i], i + 1, solution, result);
            solution.pop();
        }
    }
}

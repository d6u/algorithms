/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(n) {
    const result = [];
    solve(n, n, 1, [], result);
    return result;
};

function solve(n, target, begin, solution, result) {
    if (!target) {
        result.push(solution.slice());
        return;
    }

    for (let i = begin; i < n && target >= i; i += 1) {
        solution.push(i);
        solve(n, target - i, i, solution, result);
        solution.pop();
    }
}

console.log(combinationSum(10))

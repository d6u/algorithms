/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = [];
    solve(k, n, 1, [], result);
    return result;
};

function solve(need, target, begin, solution, result) {
    if (!target) {
        result.push(solution.slice());
        return;
    } else if (!need) {
        return;
    }

    // i * need + need * (need - 1) / 2 === i + (i+1) + (i+2) + ... + (i+need-1)
    for (let i = begin; i < 10 && target >= i * need + need * (need - 1) / 2; i += 1) {
        solution.push(i);
        solve(need - 1, target - i, i + 1, solution, result);
        solution.pop();
    }
}

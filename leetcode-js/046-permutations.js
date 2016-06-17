/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const results = [];
    getResults([], nums, new Set(), results);
    return results;
};

function getResults(solution, nums, used, results) {
    if (used.size === nums.length) {
        results.push(solution);
        return;
    }

    for (const n of nums) {
        if (!used.has(n)) {
            used.add(n);
            getResults(solution.concat(n), nums, used, results);
            used.delete(n);
        }
    }
}

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

    for (var i = 0; i < nums.length; i++) {
        if (!used.has(nums[i])) {
            used.add(nums[i]);
            getResults(solution.concat([nums[i]]), nums, used, results);
            used.delete(nums[i]);
        }
    }
}

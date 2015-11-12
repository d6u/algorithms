/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    const results = [];
    getResults([], nums, new Map(), results);
    return results;
};

function getResults(solution, nums, usedMap, results) {
    if (usedMap.size === nums.length) {
        results.push(solution);
        return;
    }

    for (var i = 0; i < nums.length; i++) {
        if (!usedMap.get(i)) {
            if (i > 0 && nums[i] === nums[i-1] && !usedMap.get(i-1)) {
                continue;
            }
            usedMap.set(i, true);
            getResults(solution.concat([nums[i]]), nums, usedMap, results);
            usedMap.delete(i);
        }
    }
}

console.log(permuteUnique([1,2]));

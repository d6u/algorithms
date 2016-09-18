/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    helper(nums, 0, [], res);
    return res;
};

function helper(nums, index, sol, res) {
    res.push(sol.slice());

    for (let i = index; i < nums.length; i++) {
        if (i > index && nums[i] === nums[i - 1]) {
            continue;
        }

        sol.push(nums[i]);
        helper(nums, i + 1, sol, res);
        sol.pop();
    }
}

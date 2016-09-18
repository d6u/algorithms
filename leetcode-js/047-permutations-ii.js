/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    helper(nums, 0, res);
    return res;
};

function helper(nums, index, res) {
    if (index === nums.length) {
        res.push(nums.slice());
        return;
    }

    for (let i = index; i < nums.length; i++) {
        if (i === index || nums[index] !== nums[i]) {
            swap(nums, index, i);
            helper(nums.slice(), index + 1, res);
        }
    }
}

function swap(nums, a, b) {
    const t = nums[a];
    nums[a] = nums[b];
    nums[b] = t;
}

console.log(permuteUnique([1,1,2,2]).length);

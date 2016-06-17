/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    getResult(nums, 0, result);
    return result;
};

function getResult(nums, index, result) {
    if (index === nums.length - 1) {
        result.push(nums);
        return;
    }

    for (let i = index; i < nums.length; i += 1) {
        if (i !== index && nums[i] === nums[index]) {
            continue;
        }
        swap(nums, index, i);
        getResult(nums.slice(), index + 1, result);
    }
}

function swap(nums, a, b) {
    const tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
}

console.log(permuteUnique([1,1,2]));

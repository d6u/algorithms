/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = [];

    result[nums.length-1] = 1;

    for (let i = nums.length - 2; i >= 0; i -= 1) {
        result[i] = result[i+1] * nums[i+1];
    }

    let left = 1;

    for (let i = 0; i < nums.length; i += 1) {
        result[i] *= left;
        left *= nums[i];
    }

    return result;
};

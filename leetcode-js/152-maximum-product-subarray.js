/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    'use strict';

    let result;
    let max;
    let min;

    result = max = min = nums[0];

    for (let i = 1; i < nums.length; i += 1) {
        const curMax = max;
        max = Math.max(curMax * nums[i], min * nums[i], nums[i]);
        min = Math.min(curMax * nums[i], min * nums[i], nums[i]);
        result = Math.max(result, max);
    }

    return result;
};

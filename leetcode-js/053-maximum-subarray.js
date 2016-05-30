/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    'use strict';

    let sum = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i += 1) {
        sum = Math.max(nums[i], nums[i] + sum);
        max = Math.max(sum, max);
    }

    return max;
};

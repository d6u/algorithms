/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    'use strict';

    for (let i = 0; i < nums.length; i++) {
        while (
            nums[i] > 0 &&
            nums[i] <= nums.length &&
            nums[nums[i] - 1] !== nums[i])
        {
            let a = i;
            let b = nums[i] - 1;
            let tmp = nums[a];
            nums[a] = nums[b];
            nums[b] = tmp;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return nums.length + 1;
};

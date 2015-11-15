/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    'use strict';

    if (nums.length <= 1) {
        return;
    }

    const len = nums.length;
    let i = len - 2;

    while (i >= 0 && nums[i] >= nums[i+1]) {
        i -= 1;
    }

    if (i < 0) {
        nums.sort((a, b) => a - b);
        return;
    }

    let j = i + 1;

    while (j < len && nums[j] > nums[i]) {
        j += 1;
    }

    j -= 1;

    const tmp = nums[j];
    nums[j] = nums[i];
    nums[i] = tmp;

    const partial = nums.slice(i+1).sort((a, b) => a - b);

    nums.splice.apply(nums, [i+1, partial.length].concat(partial));
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    'use strict';

    const dp1 = [0, nums[0]];
    const dp2 = [0, 0];

    for (let i = 1; i < nums.length; i += 1) {
        if (i === nums.length - 1) {
            dp1[i+1] = Math.max(dp1[i-1], dp1[i]);
        } else {
            dp1[i+1] = Math.max(nums[i] + dp1[i-1], dp1[i]);
        }
        dp2[i+1] = Math.max(nums[i] + dp2[i-1], dp2[i]);
    }

    return Math.max(dp1[nums.length], dp2[nums.length]);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    'use strict';

    const dp = [0, nums[0]];

    for (let i = 1; i < nums.length; i += 1) {
        dp[i+1] = Math.max(nums[i] + dp[i-1], dp[i]);
    }

    return dp[nums.length];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dp = [0, nums[0]];

    for (let i = 1; i < nums.length; i++) {
        dp[i + 1] = Math.max(dp[i - 1] + nums[i], dp[i]);
    }

    return dp[nums.length];
};

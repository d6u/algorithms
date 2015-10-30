// tags: 1d dp

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    var dp = [0, nums[0]];
    var i;

    for (i = 1; i < nums.length; i++) {
        dp[i+1] = Math.max(nums[i] + dp[i-1], dp[i]);
    }

    return dp[nums.length];
};

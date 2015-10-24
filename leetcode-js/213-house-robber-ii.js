// tags: 1d dp

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    var dp1 = [0, nums[0]];
    var l = nums.length;
    var i;

    for (i = 1; i < l - 1; i++) {
        dp1[i+1] = Math.max(nums[i] + dp1[i-1], dp1[i]);
    }
    dp1[l] = Math.max(dp1[l-2], dp1[l-1]);

    var dp2 = [0, 0];

    for (i = 1; i < l; i++) {
        dp2[i+1] = Math.max(nums[i] + dp2[i-1], dp2[i]);
    }

    return Math.max(dp1[l], dp2[l]);
};

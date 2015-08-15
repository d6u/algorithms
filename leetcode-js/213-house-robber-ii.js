/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  var dp1 = [];
  var i;

  dp1[0] = 0;
  dp1[1] = nums[0];

  for (i = 1; i < nums.length - 1; i++) {
    dp1[i + 1] = Math.max(dp1[i], dp1[i - 1] + nums[i]);
  }

  var dp2 = [];
  dp2[0] = 0;
  dp2[1] = nums[1];

  for (i = 2; i < nums.length; i++) {
    dp2[i] = Math.max(dp2[i-1], dp2[i-2] + nums[i]);
  }

  return Math.max(dp1[dp1.length-1], dp2[dp2.length-1]);
};

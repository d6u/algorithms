/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  var maxIndex = 0;
  var i;
  for (i = 0; i < nums.length; i++) {
    if (i > maxIndex || maxIndex >= nums.length - 1) break;
    maxIndex = Math.max(maxIndex, i + nums[i]);
  }
  return maxIndex >= n - 1;
};

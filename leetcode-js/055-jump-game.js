/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  var i = 0;
  for (var reach = 0; i < nums.length && i <= reach; i++) {
    reach = Math.max(reach, i + nums[i]);
  }
  return i === nums.length;
};

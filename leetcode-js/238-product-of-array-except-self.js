/**
 * @param  {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  var r = Array(nums.length);
  var i;
  var left;

  r[nums.length - 1] = 1;

  for (i = nums.length - 2; i >= 0; i--) {
    r[i] = r[i+1] * nums[i+1];
  }

  left = 1;

  for (i = 0; i < nums.length; i++) {
    r[i] *= left;
    left *= nums[i];
  }

  return r;
};

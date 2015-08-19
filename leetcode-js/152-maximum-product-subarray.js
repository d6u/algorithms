/**
 * @param  {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (!nums.length) return 0;

  var r;
  var curMax;
  var curMin;

  r = curMax = curMin = nums[0];

  var i;
  var tmp;

  for (i = 1; i < nums.length; i++) {
    tmp = curMax;
    curMax = Math.max(curMax * nums[i], curMin * nums[i], nums[i]);
    curMin = Math.min(tmp * nums[i], curMin * nums[i], nums[i]);
    r = Math.max(r, curMax);
  }

  return r;
};

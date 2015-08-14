/**
 * @param  {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var p = 0;
  var c = 1;
  var i;

  for (i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[p]) {
      p += 1;
      nums[p] = nums[i];
      c = 1;
    }
    else if (c < 2) {
      p += 1;
      nums[p] = nums[i];
      c += 1;
    }
  }

  return p + 1;
};

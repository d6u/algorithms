/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  var l = nums.length;
  var start = 0;
  var end = 0;
  var sum = 0;
  var r = l + 1;

  while (end < l) {
    while (end < l && sum < s) {
      sum += nums[end];
      end += 1;
    }

    while (start < end && sum >= s) {
      if (sum >= s) {
        r = Math.min(r, end - start);
      }
      sum -= nums[start];
      start += 1;
    }
  }

  return r > l ? 0 : r;
};

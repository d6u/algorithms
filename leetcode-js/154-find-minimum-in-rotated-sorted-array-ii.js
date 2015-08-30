/**
 * @param  {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  var start = 0;
  var end = nums.length - 1;
  var mid;

  while (start < end) {
    mid = (start + end) / 2 | 0;
    if (nums[mid] < nums[end]) {
      end = mid;
    } else if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else {
      end -= 1;
    }
  }

  return nums[start];
};

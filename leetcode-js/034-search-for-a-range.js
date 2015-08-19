/**
 * @param  {number[]} nums
 * @param  {number}   target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var start = 0;
  var end = nums.length - 1;
  var mid;
  var lowBound;
  var highBound;

  while (start < end) {
    mid = (start + end) >> 1;
    if (nums[mid] < target) {
      start = mid + 1;
      continue;
    }
    end = mid;
  }

  lowBound = nums[start] == target ? start : -1;
  if (lowBound === -1) {
    return [-1, -1];
  }

  start = lowBound;
  end = nums.length;
  while (start < end) {
    mid = (start + end) >> 1;
    if (nums[mid] > target) {
      end = mid;
      continue;
    }
    start = mid + 1;
  }

  highBound = start - 1;
  return [lowBound, highBound];
};

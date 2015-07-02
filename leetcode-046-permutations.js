/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var r = [];
  for (var i = 0; i < nums.length; i++) {
    buildArray([nums[i]], nums, [nums[i]], r);
  }
  return r;
};

function buildArray(arr, nums, used, r) {
  if (nums.length === used.length) {
    r.push(arr);
  }

  for (var i = 0; i < nums.length; i++) {
    if (used.indexOf(nums[i]) === -1) {
      buildArray(arr.concat([nums[i]]), nums, used.concat([nums[i]]), r);
    }
  }
}

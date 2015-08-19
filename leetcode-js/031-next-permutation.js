/**
 * @param  {number[]} nums
 * @return {void}     Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (nums.length < 2) return;

  var l = nums.length;
  var j = l - 2;

  while (j >= 0 && nums[j] >= nums[j+1]) {
    j -= 1;
  }

  if (j < 0) {
    nums.sort(function (a, b) {
      return a - b;
    });
    return;
  }

  var i = j + 1;

  while (i < l && nums[i] > nums[j]) {
    i += 1;
  }

  i -= 1;

  var tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;

  var partial = nums.slice(j+1).sort(function (a, b) {
    return a - b;
  });

  for (i = j + 1; i < j + 1 + partial.length; i++) {
    nums[i] = partial[i - j - 1];
  }
};

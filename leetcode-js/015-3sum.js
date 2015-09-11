/**
 * @param  {number[]}   nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  return threeSumGen(nums, 0);
};

function threeSumGen(nums, target) {
  var allSol = [];

  if (nums.length < 3) return allSol;

  nums.sort((a, b) => a - b);

  var i;
  var left;
  var right;
  var curSum;
  var curTarget;
  var sol;

  for (i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i-1]) continue;
    left = i + 1;
    right = nums.length - 1;
    curTarget = target - nums[i];
    while (left < right) {
      curSum = nums[left] + nums[right];
      if (curSum === curTarget) {
        sol = [];
        sol.push(nums[i]);
        sol.push(nums[left]);
        sol.push(nums[right]);
        allSol.push(sol);
        left += 1;
        right -= 1;
        while (nums[left] === nums[left-1]) left += 1;
        while (nums[right] === nums[right+1]) right -= 1;
      } else if (curSum < curTarget) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }

  return allSol;
}

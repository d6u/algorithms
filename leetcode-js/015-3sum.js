/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    return solveThreeSum(nums, 0);
};

function solveThreeSum(nums, target) {
    var solutions = [];

    if (nums.length < 3) return solutions;

    nums.sort((a, b) => a - b);

    var i;
    var left;
    var right;
    var curTarget;
    var sum;

    for (i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        left = i + 1;
        right = nums.length - 1;
        curTarget = target - nums[i];
        while (left < right) {
            sum = nums[left] + nums[right];
            if (sum === curTarget) {
                solutions.push([nums[i], nums[left], nums[right]]);
                left += 1;
                right -= 1;
                while (nums[left] === nums[left-1]) {
                    left += 1;
                }
                while (nums[right] === nums[right+1]) {
                    right -= 1;
                }
            } else if (sum < curTarget) {
                left += 1;
            } else {
                right -= 1;
            }
        }
    }

    return solutions;
}

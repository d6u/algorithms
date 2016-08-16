/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    for (let i = 1; i < nums.length; i += 1) {
        if (nums[i-1] > nums[i]) {
            return i - 1;
        }
    }
    return nums.length - 1;
};

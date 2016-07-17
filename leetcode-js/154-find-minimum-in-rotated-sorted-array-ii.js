/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // 1. Follow binary search approach
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        // 2. Could be 44404 or 01444, so we cannot be sure which part has
        // smallest element
        if (nums[mid] === nums[right]) {
            right -= 1;
        } else if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return nums[left];
};

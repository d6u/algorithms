/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (target > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (nums[left] !== target) {
        return [-1, -1];
    }

    const leftIndex = left;

    right = nums.length - 1;

    while (left <= right) {
        const mid = Math.ceil((left + right) / 2);
        if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return [leftIndex, right];
};

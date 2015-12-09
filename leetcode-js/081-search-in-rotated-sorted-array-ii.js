/**
 * @param  {number[]} nums
 * @param  {number}   target
 * @return {boolean}
 */
var search = function(nums, target) {
    var n = nums.length;
    var lo = 0;
    var hi = n - 1;
    var mid;

    while (lo < hi) {
        mid = Math.floor((lo + hi) / 2);
        if (nums[mid] === target) {
            return true;
        }
        if (nums[mid] > nums[hi]) {
            if (nums[mid] > target && nums[lo] <= target) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        } else if (nums[mid] < nums[hi]) {
            if (nums[mid] < target && nums[hi] >= target) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        } else {
            hi -= 1;
        }
    }

    return nums[lo] === target;
};

search([3, 1, 1], 3);

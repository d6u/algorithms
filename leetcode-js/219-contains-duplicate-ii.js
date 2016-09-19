/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const s = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (i > k) {
            s.delete(nums[i - k - 1]);
        }
        if (s.has(nums[i])) {
            return true;
        } else {
            s.add(nums[i]);
        }
    }

    return false;
};

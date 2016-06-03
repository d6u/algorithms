/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();

    for (const [index, n] of nums.entries()) {
        const i = map.get(n);
        if (i == null) {
            map.set(n, index);
        } else {
            if (index - i <= k) {
                return true;
            }
            map.set(n, index);
        }
    }

    return false;
};

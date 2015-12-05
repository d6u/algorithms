/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var o = {};
    var n;
    var i;
    for (i = 0; i < nums.length; i++) {
        n = nums[i];
        if (o[n] != null) {
            if (i - o[n] <= k) {
                return true;
            }
        }
        o[n] = i;
    }
    return false;
};

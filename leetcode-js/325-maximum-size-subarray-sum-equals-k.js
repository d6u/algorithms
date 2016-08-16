/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    var sum = 0;
    var max = 0;
    var map = new Map();
    for (var i = 0; i < nums.length; i += 1) {
        sum += nums[i];
        if (sum === k) {
            max = i + 1;
        } else if (map.has(sum - k)) {
            max = Math.max(max, i - map.get(sum - k));
        }
        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }
    return max;
};

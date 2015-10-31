/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var start = 0;
    var end = 0;
    var sum = 0;
    var l = nums.length + 1;

    while (end < nums.length) {
        while (end < nums.length && sum < s) {
            sum += nums[end];
            end += 1;
        }
        while (start < end && sum >= s) {
            if (sum >= s) {
                l = Math.min(l, end - start);
            }
            sum -= nums[start];
            start += 1;
        }
    }

    return l > nums.length ? 0 : l;
};

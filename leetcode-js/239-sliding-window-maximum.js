/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    var n = nums.length;
    var windowMax = [];
    var dq = [];
    for (var i = 0; i < n; i++) {
        while (dq.length !== 0 && dq[0] < i - k + 1) {
            dq.shift();
        }
        while (dq.length !== 0 && nums[dq[dq.length-1]] < nums[i]) {
            dq.pop();
        }
        dq.push(i);
        if (i >= k - 1) windowMax.push(nums[dq[0]]);
    }
    return windowMax;
};

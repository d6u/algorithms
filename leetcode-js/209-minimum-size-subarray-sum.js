/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let len = nums.length + 1;

    while (right < nums.length) {
        while (right < nums.length && sum < s) {
            sum += nums[right];
            right += 1;
        }
        while (left < right && sum >= s) {
            len = Math.min(len, right - left);
            sum -= nums[left];
            left += 1;
        }
    }

    return len === nums.length + 1 ? 0 : len;
};

console.log(minSubArrayLen(7, [2,3,1,2,8,-1]))

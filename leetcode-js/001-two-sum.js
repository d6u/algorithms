/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var s = {};
    var i;
    var n;
    for (i = 0; i < nums.length; i++) {
        n = nums[i];
        if (s[n] !== undefined) {
            return [s[n] + 1, i + 1];
        }
        s[target - n] = i;
    }
};

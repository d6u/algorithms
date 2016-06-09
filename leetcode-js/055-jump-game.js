/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let i = 0;

    for (let reach = 0; i <= reach && i < nums.length; i += 1) {
        reach = Math.max(reach, i + nums[i]);
    }

    return i === nums.length;
};

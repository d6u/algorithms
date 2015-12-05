/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var c = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[c] = nums[i];
            c += 1;
        }
    }
    return c;
};

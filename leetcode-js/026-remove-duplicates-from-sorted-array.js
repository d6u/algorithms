/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0 || nums.length === 1) return nums.length;

    var i1 = 0;
    var i2;

    for (i2 = 1; i2 < nums.length; i2++) {
        if (nums[i1] !== nums[i2]) {
            i1 += 1;
            nums[i1] = nums[i2];
        }
    }

    return i1 + 1;
};

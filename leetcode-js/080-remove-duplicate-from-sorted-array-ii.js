/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i1 = 0;
    let count = 1;

    for (let i2 = 1; i2 < nums.length; i2 += 1) {
        if (nums[i1] !== nums[i2]) {
            i1 += 1;
            nums[i1] = nums[i2];
            count = 1;
        } else if (count < 2) {
            i1 += 1;
            nums[i1] = nums[i2];
            count += 1;
        }
    }

    return i1 + 1;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroIndex = 0;

    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === 0) {
            for (let j = i + 1; j < nums.length; j += 1) {
                if (nums[j] !== 0) {
                    const tmp = nums[j];
                    nums[j] = nums[i];
                    nums[i] = tmp;
                    break;
                }
            }
        }
    }
};

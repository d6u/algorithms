/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let redIndex = 0;
    let blueIndex = nums.length - 1;
    let index = 0;

    while (index <= blueIndex) {
        if (nums[index] === 0) {
            const tmp = nums[redIndex];
            nums[redIndex] = nums[index];
            nums[index] = tmp;
            redIndex += 1;
            index += 1;
        } else if (nums[index] === 2) {
            const tmp = nums[blueIndex];
            nums[blueIndex] = nums[index];
            nums[index] = tmp;
            blueIndex -= 1;
        } else {
            index += 1;
        }
    }
};

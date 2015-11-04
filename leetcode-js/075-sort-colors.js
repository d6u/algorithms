/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var posRed = 0;
    var posBlue = nums.length - 1;
    var i = 0;
    var tmp;

    while (i <= posBlue) {
        if (nums[i] === 0) {
            tmp = nums[posRed];
            nums[posRed] = nums[i];
            nums[i] = tmp;
            posRed += 1;
            i += 1;
        } else if (nums[i] === 2) {
            tmp = nums[posBlue];
            nums[posBlue] = nums[i];
            nums[i] = tmp;
            posBlue -= 1;
        } else {
            i += 1;
        }
    }
};

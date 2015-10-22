/**
 * @param  {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var i;
    var j;
    var t;

    for (i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            j = i + 1;

            for (; j < nums.length; j++) {
                if (nums[j] !== 0) {
                    t = nums[i];
                    nums[i] = nums[j];
                    nums[j] = t;
                    break;
                }
            }
        }
    }
};

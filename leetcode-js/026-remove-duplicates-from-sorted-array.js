/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let currentIndex = 0;

    for (let i = 1; i < nums.length; i += 1) {
        if (nums[currentIndex] !== nums[i]) {
            currentIndex += 1;
            nums[currentIndex] = nums[i];
        }
    }

    return currentIndex + 1;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    for (let i = 0; i < nums.length; i += 1) {
        if (i % 2 === 1) {
            if (nums[i-1] > nums[i]) {
                swap(nums, i, i-1);
            }
        } else if (i > 0) {
            if (nums[i-1] < nums[i]) {
                swap(nums, i, i-1);
            }
        }
    }
};

function swap(nums, a, b) {
    const tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
}

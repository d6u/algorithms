/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    var tmp;
    for (var i = 0; i < nums.length; i++) {
        if (i % 2 === 1) {
            if (nums[i-1] > nums[i]) {
                swap(nums, i);
            }
        } else if (i !== 0 && nums[i-1] < nums[i]) {
            swap(nums, i);
        }
    }
};

function swap(nums, i) {
    var tmp = nums[i];
    nums[i] = nums[i-1];
    nums[i-1] = tmp;
}

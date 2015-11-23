/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var l = nums.length;
    var m;
    var c = 0;
    for (var i = 0; i < l; i++) {
        if (c === 0) {
            m = nums[i];
        }

        if (nums[i] === m) {
            c += 1;
        } else {
            c -= 1;
        }
    }

    return m;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var i = 0;
    var j = nums.length - 1;
    var ret = [-1, -1];

    while (i < j) {
        var mid = Math.floor((i + j) / 2);
        if (nums[mid] < target) {
            i = mid + 1;
        } else {
            j = mid;
        }
    }

    if (nums[i] !== target) {
        return ret;
    }

    ret[0] = i;

    j = nums.length - 1;

    while (i < j) {
        var mid = Math.ceil((i + j) / 2);
        if (nums[mid] > target) {
            j = mid - 1;
        } else {
            i = mid;
        }
    }

    ret[1] = j;

    return ret;
};

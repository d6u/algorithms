/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0) {
        return -1;
    }

    var m;
    var l = 0;
    var r = nums.length - 1;

    while (l <= r) {
        m = Math.floor((l + r) / 2);

        if (nums[m] === target) {
            return m;
        }

        if (nums[l] < nums[m]) {
            if (nums[l] === target) {
                return l;
            }
            if (target < nums[m] && target > nums[l]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        } else {
            if (nums[r] === target) {
                return r;
            }
            if (target > nums[m] && target < nums[r]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }

    return -1;
};

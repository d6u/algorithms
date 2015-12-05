/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var o = {};

    for (var n of nums) {
        if (o[n] != null) {
            return true;
        }
        o[n] = true;
    }

    return false;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var res = 0;
    var map = {};

    for (var n of nums) {
        if (map[n] == null) {
            var left = map[n-1] != null ? map[n-1] : 0;
            var right = map[n+1] != null ? map[n+1] : 0;
            var sum = left + right + 1;

            map[n] = sum;

            res = Math.max(res, sum);

            map[n-left] = sum;
            map[n+right] = sum;
        }
    }

    return res;
};

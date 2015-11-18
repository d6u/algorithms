/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    if (nums.length < 3) {
        return 0;
    }

    nums.sort((a, b) => a - b);

    var count = 0;

    for (var i = 0; i < nums.length - 2; i++) {
        if (nums[i] + nums[i+1] + nums[i+2] >= target) break;
        var j = i + 1;
        var k = nums.length - 1;
        while (j < k) {
            while (j < k && nums[i] + nums[j] + nums[k] >= target) {
                k -= 1;
            }
            count += k - j;
            j += 1;
        }
    }

    return count;
};

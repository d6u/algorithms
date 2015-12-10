/**
 * @param  {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var results = [];

    if (nums.length === 1) {
        results.push(`${nums[0]}`);
        return results;
    }

    for (var i = 0; i < nums.length; i++) {
        var a = nums[i];
        while (i + 1 < nums.length && nums[i+1] - nums[i] === 1) {
            i += 1;
        }
        if (a !== nums[i]) {
            results.push(`${a}->${nums[i]}`);
        } else {
            results.push(`${a}`);
        }
    }

    return results;
};

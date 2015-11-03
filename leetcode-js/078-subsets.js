/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    nums.sort((a, b) => a - b);

    var results = [[]];
    var i;
    var j;
    var tmp;

    for (i = 0; i < nums.length; i++) {
        tmp = [];
        for (j = 0; j < results.length; j++) {
            tmp.push(results[j].concat([nums[i]]));
        }
        results = results.concat(tmp);
    }

    return results;
};

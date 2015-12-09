/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);

    var result = [[]];
    var i = 0;

    while (i < nums.length) {
        var count = 0;

        while (count + i < nums.length && nums[count + i] === nums[i]) {
            count += 1;
        }

        var previousN = result.length;

        for (var k = 0; k < previousN; k++) {
            var instance = result[k].slice();
            for (var j = 0; j < count; j++) {
                instance.push(nums[i]);
                result.push(instance.slice());
                console.log(result);
            }
        }

        i += count;
    }

    return result;
};

console.log(subsetsWithDup([1,1,2,2]));

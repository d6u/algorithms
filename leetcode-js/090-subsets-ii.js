/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);

    const result = [[]];
    let i = 0;

    while (i < nums.length) {
        let count = 1;
        while (i + count < nums.length && nums[i] === nums[i+count]) {
            count += 1;
        }
        const prevLen = result.length;
        for (let k = 0; k < prevLen; k += 1) {
            const arr = result[k].slice();
            for (let j = 0; j < count; j += 1) {
                arr.push(nums[i]);
                result.push(arr.slice());
            }
        }
        i += count;
    }

    return result;
};

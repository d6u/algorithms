/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = nums => nums.reduce((l, n) => l ^ n);

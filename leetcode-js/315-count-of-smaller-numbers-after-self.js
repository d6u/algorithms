/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    const smaller = Array(nums.length).fill(0);
    sort(Array.from(nums.entries()), smaller);
    return smaller;
};

function sort(nums, smaller) {
    const mid = Math.floor(nums.length / 2);
    if (mid) {
        const left = sort(nums.slice(0, mid), smaller);
        const right = sort(nums.slice(mid), smaller);
        let i = 0;
        let j = 0;
        while (i < left.length || j < right.length) {
            if (j === right.length || i < left.length && left[i][1] <= right[j][1]) {
                nums[i+j] = left[i];
                smaller[left[i][0]] += j;
                i += 1;
            } else {
                nums[i+j] = right[j];
                j += 1;
            }
        }
    }
    return nums;
}

console.log(countSmaller([5,2,6,1]));

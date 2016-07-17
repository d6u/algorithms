/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    const smaller = Array(nums.length).fill(0);

    // 1. Convert into a merge sort problem
    sort(Array.from(nums.entries()), smaller);

    return smaller;
};

function sort(nums, smaller) {
    const mid = Math.floor(nums.length / 2);

    // 2. When there are more than 1 elements
    if (mid) {
        const left = sort(nums.slice(0, mid), smaller);
        const right = sort(nums.slice(mid), smaller);
        let i = 0;
        let j = 0;
        while (i < left.length || j < right.length) {

            // 3. No more elements in right, or current left element is smaller
            // or equals to right
            if (j === right.length || i < left.length && left[i][1] <= right[j][1]) {
                nums[i+j] = left[i];

                // 4. If a left element is found no larger than the right, all
                // previous right elements that are assign already are
                // considered smaller elements that the current left element.
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

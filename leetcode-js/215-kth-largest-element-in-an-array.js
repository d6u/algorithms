/**
 * @param  {number[]} nums
 * @param  {number}   k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // 1. Shuffle nums to avoid worst case O(n^2).
    // It will guaranteed to solve the problem in O(n) speed.
    shuffle(nums);

    // 2. Convert to find kth smallest number
    k = nums.length - k;

    let lo = 0;
    let hi = nums.length - 1;

    while (lo < hi) {

        // 3. Partition algorithm used in quick sort
        const j = partition(nums, lo, hi);

        if (j < k) {
            lo = j + 1;
        } else if (j > k) {
            hi = j - 1;
        } else {
            // 5. Repeat until partition pivot's index equals to k
            break;
        }
    }

    return nums[k];
};

function partition(arr, l, r) {
    const pivot = arr[r];
    for (let i = l; i < r; i += 1) {
        if (arr[i] <= pivot) {
            swap(arr, l, i);
            l += 1;
        }
    }
    swap(arr, l, r);

    // 4. Return the pivot's new position
    return l;
}

function shuffle(arr) {
    let i = arr.length;
    while (i > 0) {
        const random = Math.floor(Math.random() * i);
        i -= 1;
        swap(arr, i, random);
    }
}

function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

// console.log(findKthLargest([1,5,2,5,4], 2))
let input = [1,5,2,5,4];
console.log(partition(input, 1, input.length - 1));
console.log(input)

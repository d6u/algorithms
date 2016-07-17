/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
    const sums = Array(nums.length+1).fill(0);

    // 1. Transform range sum into sums[i2] - sums[i1] (prefix sum),
    // where i2 > i1
    for (let i = 0; i < nums.length; i += 1) {
        sums[i+1] = sums[i] + nums[i];
    }

    // 2. Count while merge sort
    return mergeSort(sums, 0, sums.length, lower, upper);
};

function mergeSort(sums, start, end, lower, upper) {
    if (end - start <= 1) {
        return 0;
    }

    const mid = Math.floor((start + end) / 2);

    // 3. count is the result
    let count =
        mergeSort(sums, start, mid, lower, upper) +
        mergeSort(sums, mid, end, lower, upper);

    // 4. Used another array to store elements in sorted order to complete
    // merge sort
    const cache = Array(end - start).fill(0);

    let k = mid; // track index of first elements lower <= sums[i2] - sums[i1]
    let j = mid; // track index of first elements sums[i2] - sums[i1] <= upper
    let t = mid; // index of right half
    let i = start; // index of left half
    let r = 0; // index of cache array

    while (i < mid) {
        // 5. Find the first k for sums[k] - sums[i] < lower,
        // then all elements after k has lower <= sums[i2>k] - sums[i]
        while (k < end && sums[k] - sums[i] < lower) {
            k += 1;
        }

        while (j < end && sums[j] - sums[i] <= upper) {
            j += 1;
        }

        count += j - k;

        // 6. Sort the two arraies into one cache array
        while (t < end && sums[t] < sums[i]) {
            cache[r] = sums[t];
            r += 1;
            t += 1;
        }

        cache[r] = sums[i];
        r += 1;
        i += 1;
    }

    // 7. Assign the sorted element into the sums array
    for (let i2 = 0; i2 < t - start; i2 += 1) {
        sums[start+i2] = cache[i2];
    }

    return count;
}

console.log(countRangeSum([-2,5,-1], -2, 2))

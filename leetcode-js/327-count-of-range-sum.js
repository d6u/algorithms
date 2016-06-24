/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
    const sums = Array(nums.length+1).fill(0);

    // 1. Transform range sum into sums[i2] - sums[i1], where i2 > i1
    for (let i = 0; i < nums.length; i += 1) {
        sums[i+1] = sums[i] + nums[i];
    }

    return mergeSort(sums, 0, sums.length, lower, upper);
};

function mergeSort(sums, start, end, lower, upper) {
    if (end - start <= 1) {
        return 0;
    }

    const mid = Math.floor((start + end) / 2);
    let count = mergeSort(sums, start, mid, lower, upper) + mergeSort(sums, mid, end, lower, upper);

    const cache = Array(end - start).fill(0);
    let j = mid;
    let k = mid;
    let t = mid;

    for (let i = start, r = 0; i < mid; i += 1, r += 1) {
        while (k < end && sums[k] - sums[i] < lower) {
            k += 1;
        }
        while (j < end && sums[j] - sums[i] <= upper) {
            j += 1;
        }
        while (t < end && sums[t] < sums[i]) {
            cache[r] = sums[t];
            r += 1;
            t += 1;
        }
        cache[r] = sums[i];
        count += j - k;
    }

    for (let i = 0; i < t - start; i += 1) {
        sums[start+i] = cache[i];
    }

    return count;
}

console.log(countRangeSum([-2,5,-1], -2, 2))

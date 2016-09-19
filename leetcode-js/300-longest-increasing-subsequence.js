/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const res = [];
    for (const n of nums) {
        res[binarySearch(res, n)] = n;
    }
    return res.length;
};

function binarySearch(arr, t) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        if (arr[m] === t) {
            return m;
        } else if (arr[m] < t) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return l;
}

console.log(lengthOfLIS([3,5,6,2,5,4,19,5,6,7,12]));

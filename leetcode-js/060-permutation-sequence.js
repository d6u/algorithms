var MAP_FACTORIAL = [
    1,
    1,
    2,
    6,
    24,
    120,
    720,
    5040,
    40320,
    362880
];

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    var nums = [];
    var i;
    var currentCount;
    var sum;
    var index;
    var arr = [];
    var count = 0;

    for (i = 1; i <= n; i++) {
        nums[i-1] = i;
    }

    while (arr.length < n) {
        currentCount = count;
        for (i = 0; i < nums.length; i++) {
            sum = currentCount + MAP_FACTORIAL[n-arr.length-1];
            if (sum < k) {
                currentCount = sum;
                continue;
            }
            arr.push(nums[i]);
            count = currentCount;
            index = nums.indexOf(nums[i]);
            nums.splice(index, 1);
            break;
        }
    }

    return arr.join('');
};

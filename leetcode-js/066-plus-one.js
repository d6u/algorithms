/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var results = [];
    var one = 1;
    var sum;
    var i;
    for (i = digits.length - 1; i >= 0; i--) {
        sum = digits[i] + one;
        one = Math.floor(sum / 10);
        results[i] = sum % 10;
    }

    if (one === 1) {
        results.unshift(one);
    }

    return results;
};

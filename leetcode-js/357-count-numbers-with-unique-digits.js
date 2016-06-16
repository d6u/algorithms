/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if (n === 0) {
        return 1;
    }

    let res = 10;
    let uniqueDigits = 9;
    let availableNumber = 9;

    while (n > 1 && availableNumber > 0) {
        uniqueDigits *= availableNumber;
        res += uniqueDigits;
        availableNumber -= 1;
        n -= 1;
    }

    return res;
};

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (!divisor || (dividend === -Math.pow(2, 31) && divisor === -1)) {
        return Math.pow(2, 31) - 1;
    }

    const sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let result = 0;

    while (dividend >= divisor) {
        let tmp = divisor;
        let multiple = 1;
        while (dividend >= (tmp << 1)) {
            tmp <<= 1;
            multiple <<= 1;
        }
        dividend -= tmp;
        result += multiple;
    }

    return sign === 1 ? result : -result;
};

console.log(divide(2147483647, 1));

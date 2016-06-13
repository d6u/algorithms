/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;

    while (x !== 0) {
        const tail = x % 10;
        result = result * 10 + tail;
        if (result > 2147483647 || result < -2147483648) {
            return 0;
        }
        x = Math.trunc(x / 10);
    }

    return result;
};

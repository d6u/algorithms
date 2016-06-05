/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n < 0) {
        return 1 / pow(x, -n);
    } else {
        return pow(x, n);
    }
};

function pow(x, n) {
    if (n === 0) {
        return 1;
    }

    const val = pow(x, Math.floor(n / 2));

    if (n % 2 === 0) {
        return val * val;
    } else {
        return val * val * x;
    }
}

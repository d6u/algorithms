/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    return n < 0 ? 1 / _pow(x, -n) : _pow(x, n);
};

function _pow(x, n) {
    if (n === 0) {
        return 1;
    }

    var v = _pow(x, Math.floor(n / 2));

    return n % 2 === 0 ? v * v : v * v * x;
}

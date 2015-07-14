/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n < 0) {
    return 1 / _pow(x, -n);
  } else {
    return _pow(x, n);
  }
};

function _pow(x, n) {
  if (n === 0) {
    return 1;
  }

  var v = _pow(x, n / 2 | 0);

  if (n % 2 === 0) {
    return v * v;
  } else {
    return v * v * x;
  }
}

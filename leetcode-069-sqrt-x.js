/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0) return x;
  var dividend = x;
  var val = x;
  var last;

  do {
    last = val;
    val = (val + dividend / val) / 2;
  } while (Math.abs(val - last) > 0.000000001);

  return val | 0;
};

console.log(mySqrt(2147395599));

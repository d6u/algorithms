/**
 * @param  {number}   n
 * @return {number[]}
 */
var grayCode = function(n) {
  var r = [];
  if (n < 0) return r;
  var i;
  var j;
  var inc = 1;
  r.push(0);
  for (i = 1; i <= n; i++) {
    for (j = r.length - 1; j >= 0; j--) {
      r.push(r[j] + inc);
    }
    inc <<= 1;
  }
  return r;
};

/**
 * @param  {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  var queue = [1];
  var i2 = 0;
  var i3 = 0;
  var i5 = 0;
  var m2;
  var m3;
  var m5;
  var m;

  while (queue.length < n) {
    m2 = queue[i2] * 2;
    m3 = queue[i3] * 3;
    m5 = queue[i5] * 5;
    m = Math.min(m2, m3, m5);
    if (m === m2) {
      i2 += 1;
    }
    if (m === m3) {
      i3 += 1;
    }
    if (m === m5) {
      i5 += 1;
    }
    queue.push(m);
  }

  return queue[n - 1];
};

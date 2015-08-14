/**
 * @param  {number}     k
 * @param  {number}     n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  var r = [];
  getResults([], 0, 1, k, n, r);
  return r;
};

function getResults(cur, sum, index, k, n, r) {
  if (cur.length === k) {
    if (sum === n) {
      r.push(cur);
    }
    return;
  }
  var i;
  for (i = index; i <= 9; i++) {
    if (sum + i <= n) {
      getResults(cur.concat([i]), sum + i, i + 1, k, n, r);
    }
  }
}

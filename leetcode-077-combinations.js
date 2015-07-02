/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var r = [];
  makeArray(1, n, k, [], r);
  return r;
};

function makeArray(i, n, k, arr, r) {
  if (k === 0) {
    r.push(arr);
    return;
  }

  for (var j = i; j <= n - k + 1; j++) {
    makeArray(j + 1, n, k - 1, arr.concat([j]), r);
  }
}

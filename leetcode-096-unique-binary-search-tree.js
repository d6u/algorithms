/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  var counts = [];
  var i;
  counts[0] = 1;
  counts[1] = 1;
  for (i = 2; i <= n; i++) {
    counts[i] = 0;
    for (j = 0; j < i; j++) {
      counts[i] += counts[j] * counts[i-j-1];
    }
  }
  return counts[n];
};

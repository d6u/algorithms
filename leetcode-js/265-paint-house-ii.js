/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {
    if (costs.length === 0) return 0;
    if (costs[0].length === 1) return costs.reduce((sum, cost) => sum + cost[0], 0);

    var n = costs.length;
    var k = costs[0].length;
    var dp = makeArray(k, 0);
    var i;
    var j;
    var min1 = 0;
    var min2 = 0;
    var min1Old;
    var min2Old;

    for (i = 0; i < n; i++) {
        min1Old = min1;
        min2Old = min2;
        min1 = Infinity;
        min2 = Infinity;
        for (j = 0; j < k; j++) {
            if (dp[j] !== min1Old || min1Old === min2Old) {
                dp[j] = min1Old + costs[i][j];
            } else {
                dp[j] = min2Old + costs[i][j];
            }

            if (min1 <= dp[j]) {
                min2 = Math.min(min2, dp[j]);
            } else {
                min2 = min1;
                min1 = dp[j];
            }
        }
    }

    return min1;
};

function makeArray(size, filler) {
  var arr = Array(size);
  var i;
  for (i = 0; i < arr.length; i++) {
    arr[i] = typeof filler === 'function' ? filler() : filler;
  }
  return arr;
}

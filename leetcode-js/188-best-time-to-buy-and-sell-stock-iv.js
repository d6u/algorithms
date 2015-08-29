/**
 * @param  {number}   k
 * @param  {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  if (prices.length === 0) return 0;
  if (k >= prices.length) return solveMaxProfit(prices);

  var local = makeArray(k + 1, 0);
  var globa = makeArray(k + 1, 0);
  var i;
  var j;
  var diff;

  for (i = 0; i < prices.length - 1; i++) {
    diff = prices[i+1] - prices[i];
    for (j = k; j >= 1; j--) {
      local[j] = Math.max(globa[j-1] + Math.max(diff, 0), local[j] + diff);
      globa[j] = Math.max(globa[j], local[j]);
    }
  }

  return globa[k];
};

function makeArray(size, filler) {
  var arr = Array(size);
  var i;
  for (i = 0; i < arr.length; i++) {
    arr[i] = typeof filler === 'function' ? filler() : filler;
  }
  return arr;
}

function solveMaxProfit(prices) {
  var res = 0;
  var i;

  for (i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i-1] > 0) {
      res += prices[i] - prices[i-1];
    }
  }

  return res;
}

console.log(maxProfit(1, [1,2]));

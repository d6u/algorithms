/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices.length) return 0;
  if (prices.length === 1) return 0;
  var min = 0;
  var sum = prices[1] - prices[0];
  for (var i = 1; i < prices.length; i++) {
    if (prices[i] < prices[min]) {
      min = i;
    }
    sum = Math.max(prices[i] - prices[min], sum);
  }
  return Math.max(0, sum);
};

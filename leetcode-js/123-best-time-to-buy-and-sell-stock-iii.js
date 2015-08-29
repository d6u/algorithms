/**
 * @param  {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices == null || prices.length < 2) {
    return 0;
  }

  var left = Array(prices.length);
  var right = Array(prices.length);

  left[0] = 0;
  var min = prices[0];
  var i;

  for (i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    left[i] = Math.max(left[i-1], prices[i] - min);
  }

  right[prices.length - 1] = 0;
  var max = prices[prices.length - 1];
  for (i = prices.length - 2; i >= 0; i--) {
    max = Math.max(max, prices[i]);
    right[i] = Math.max(right[i+1], max - prices[i]);
  }

  var profit = 0;
  for (i = 0; i < prices.length; i++) {
    profit = Math.max(profit, left[i] + right[i]);
  }

  return profit;
};

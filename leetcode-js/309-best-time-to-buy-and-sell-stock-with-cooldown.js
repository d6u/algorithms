/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit1 = 0;
    let profit2 = 0;

    for (let i = 1; i < prices.length; i += 1) {
        const tmp = profit1;
        profit1 = Math.max(profit1 + prices[i] - prices[i-1], profit2);
        profit2 = Math.max(profit2, tmp);
    }

    return Math.max(profit1, profit2);
};

console.log(maxProfit([1,2,3,0,2]));

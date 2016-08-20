public class Solution {
    public int maxProfit(int[] prices) {
        if (prices.length == 0) {
            return 0;
        }

        int sell = 0;
        int prevSell = 0;
        int buy = -prices[0];
        int prevBuy = 0;

        for (int price : prices) {
            prevBuy = buy;
            buy = Math.max(prevBuy, prevSell - price);
            prevSell = sell;
            sell = Math.max(prevSell, prevBuy + price);
        }

        return sell;
    }
}

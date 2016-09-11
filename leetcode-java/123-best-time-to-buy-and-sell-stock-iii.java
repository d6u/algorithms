public class Solution {
    public int maxProfit(int[] prices) {
        int currentMax1 = 0;
        int max1 = 0;
        int currentMax2 = 0;
        int max2 = 0;

        for (int i = 1; i < prices.length; i++) {
            int diff = prices[i] - prices[i - 1];
            currentMax2 = Math.max(currentMax2 + diff, max1 + diff);
            max2 = Math.max(max2, currentMax2);
            currentMax1 = Math.max(currentMax1 + diff, diff);
            max1 = Math.max(max1, currentMax1);
        }

        return max2;
    }
}

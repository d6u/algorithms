public class Solution {
    public int maxProfit(int k, int[] prices) {
        if (k >= prices.length - 1) {
            return simple(prices);
        }

        int[] current = new int[k + 1];
        int[] max = new int[k + 1];

        for (int i = 1; i < prices.length; i++) {
            int diff = prices[i] - prices[i - 1];

            for (int j = k; j > 0; j--) {
                current[j] = Math.max(current[j] + diff, max[j - 1] + diff);

                // Use `max[j] = Math.max(max[j], current[j])` cause timeout here
                if (max[j] < current[j]) {
                    max[j] = current[j];
                }
            }
        }

        return max[k];
    }

    private int simple(int[] prices) {
        int max = 0;
        for (int i = 1; i < prices.length; i++) {
            int diff = prices[i] - prices[i - 1];
            if (diff > 0) {
                max += diff;
            }
        }
        return max;
    }
}

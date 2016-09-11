public class Solution {
    public int maxCoins(int[] nums) {
        int n = nums.length;
        int[] prices = new int[n + 2];
        prices[0] = 1;
        prices[n + 1] = 1;
        for (int i = 0; i < n; i++) {
            prices[i + 1] = nums[i];
        }
        int[][] memo = new int[n + 2][n + 2];
        return helper(prices, 0, n + 1, memo);
    }

    private int helper(int[] prices, int left, int right, int[][] memo) {
        if (right - left <= 1) {
            return 0;
        }

        if (memo[left][right] > 0) {
            return memo[left][right];
        }

        int max = 0;

        for (int i = left + 1; i < right; i++) {
            max = Math.max(
                max,
                prices[i] * prices[left] * prices[right] + helper(prices, left, i, memo) + helper(prices, i, right, memo)
            );
        }

        memo[left][right] = max;

        return max;
    }
}

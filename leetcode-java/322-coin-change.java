public class Solution {
    public int coinChange(int[] coins, int amount) {
        if (amount < 1) {
            return 0;
        }

        int[] dp = new int[amount + 1];
        int sum = 0;

        while(++sum <= amount) {
            int min = Integer.MAX_VALUE;

            for (int coin : coins) {
                if (sum >= coin && dp[sum - coin] != -1) {
                    int temp = dp[sum - coin] + 1;
                    min = Math.min(min, temp);
                }
            }

            dp[sum] = min == Integer.MAX_VALUE ? -1 : min;
        }

        return dp[amount];
    }
}

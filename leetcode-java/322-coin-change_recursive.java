public class Solution {
    int total = Integer.MAX_VALUE;

    public int coinChange(int[] coins, int amount) {
        if (amount == 0) {
            return 0;
        }

        Arrays.sort(coins);

        count(amount, coins.length - 1, coins, 0);

        return total == Integer.MAX_VALUE ? -1 : total;
    }

    void count(int amount, int index, int[] coins, int count) {
        if (index < 0 || count >= total - 1) {
            return;
        }

        int c = amount / coins[index];

        for (int i = c; i >= 0; i--) {
            int newCount = count + i;
            int rem = amount - i * coins[index];

            if (rem > 0 && newCount < total) {
                count(rem, index - 1, coins, newCount);
            } else if (newCount < total) {
                total = newCount;
            } else if (newCount >= total - 1) {
                break;
            }
        }
    }
}

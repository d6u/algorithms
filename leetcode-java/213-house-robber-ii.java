public class Solution {
    public int rob(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }

        int n = nums.length;
        int[] dp1 = new int[n + 1];
        int[] dp2 = new int[n + 1];

        dp1[0] = 0;
        dp1[1] = nums[0];

        dp2[0] = 0;
        dp2[1] = 0;

        for (int i = 1; i < n; i++) {
            if (i == n - 1) {
                dp1[i + 1] = Math.max(dp1[i - 1], dp1[i]);
            } else {
                dp1[i + 1] = Math.max(dp1[i - 1] + nums[i], dp1[i]);
            }
            dp2[i + 1] = Math.max(dp2[i - 1] + nums[i], dp2[i]);
        }

        return Math.max(dp1[n], dp2[n]);
    }
}

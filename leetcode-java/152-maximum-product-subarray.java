public class Solution {
    public int maxProduct(int[] nums) {
        int max = nums[0];
        int min = nums[0];
        int result = nums[0];

        for (int i = 1; i < nums.length; i++) {
            int n = nums[i];
            int curMax = max;
            max = Math.max(Math.max(n, curMax * n), min * n);
            min = Math.min(Math.min(n, curMax * n), min * n);
            result = Math.max(result, max);
        }

        return result;
    }
}

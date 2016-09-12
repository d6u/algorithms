public class Solution {
    public int lengthOfLIS(int[] nums) {
        int[] arr = new int[nums.length];
        int len = 0;

        for (int x : nums) {
            int i = Arrays.binarySearch(arr, 0, len, x);
            if (i < 0) {
                i = -(i + 1);
            }
            arr[i] = x;
            if (i == len) {
                len++;
            }
        }

        return len;
    }
}

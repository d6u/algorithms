public class Solution {
    public int threeSumSmaller(int[] nums, int target) {
        Arrays.sort(nums);
        int count = 0;
        int len = nums.length;

        for (int i = 0; i < len - 2; i++) {
            int n = nums[i];
            int left = i + 1;
            int right = len - 1;
            while (left < right) {
                if (n + nums[left] + nums[right] < target) {
                    count += right - left;
                    left++;
                } else {
                    right--;
                }
            }
        }

        return count;
    }
}

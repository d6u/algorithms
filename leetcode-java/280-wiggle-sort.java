public class Solution {
    public void wiggleSort(int[] nums) {
        for (int i = 1; i < nums.length; i++) {
            if (i % 2 == 0) {
                if (nums[i - 1] < nums[i]) {
                    swap(nums, i, i - 1);
                }
            } else {
                if (nums[i - 1] > nums[i]) {
                    swap(nums, i, i - 1);
                }
            }
        }
    }

    void swap(int[] nums, int a, int b) {
        int t = nums[a];
        nums[a] = nums[b];
        nums[b] = t;
    }
}

public class Solution {
    public void wiggleSort(int[] nums) {
        for (int i = 1; i < nums.length; i++) {
            if (i % 2 == 1) {
                if (nums[i-1] > nums[i]) {
                    swap(nums, i-1, i);
                }
            } else {
                if (nums[i-1] < nums[i]) {
                    swap(nums, i-1, i);
                }
            }
        }
    }

    public void swap(int[] nums, int a, int b) {
        int val = nums[a];
        nums[a] = nums[b];
        nums[b] = val;
    }
}

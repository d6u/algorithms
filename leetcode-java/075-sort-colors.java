public class Solution {
    public void sortColors(int[] nums) {
        int r = 0;
        int b = nums.length - 1;
        int i = 0;
        while (i <= b) {
            if (nums[i] == 0) {
                swap(nums, r, i);
                r++;
                i++;
            } else if (nums[i] == 2) {
                swap(nums, b, i);
                b--;
            } else {
                i++;
            }
        }
    }

    void swap(int[] nums, int a, int b) {
        int t = nums[a];
        nums[a] = nums[b];
        nums[b] = t;
    }
}

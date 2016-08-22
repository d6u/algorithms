public class Solution {
    public void nextPermutation(int[] nums) {
        int i = nums.length - 2;

        while (i >= 0 && nums[i] >= nums[i + 1]) {
            i--;
        }

        if (i >= 0) {
            int j = i + 1;
            while (j < nums.length && nums[i] < nums[j]) {
                j++;
            }
            swap(nums, i, j - 1);
        }

        i++;

        int k = nums.length - 1;

        while (i < k) {
            swap(nums, i, k);
            i++;
            k--;
        }
    }

    void swap(int[] nums, int a, int b) {
        int t = nums[a];
        nums[a] = nums[b];
        nums[b] = t;
    }
}

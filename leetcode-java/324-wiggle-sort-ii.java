public class Solution {
    public void wiggleSort(int[] nums) {
        Arrays.sort(nums);

        int half = (nums.length + 1) / 2;
        int[] small = Arrays.copyOfRange(nums, 0, half);
        int[] large = Arrays.copyOfRange(nums, half, nums.length);

        for (int i = 0, j = small.length - 1, k = large.length - 1; i < nums.length; i++) {
            if (i % 2 == 0)
                nums[i] = small[j--];
            else
                nums[i] = large[k--];
        }
    }
}

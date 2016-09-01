public class Solution {

    int[] nums;
    Random random;

    public Solution(int[] nums) {
        this.nums = nums;
        random = new Random();
    }

    /** Resets the array to its original configuration and return it. */
    public int[] reset() {
        return nums;
    }

    /** Returns a random shuffling of the array. */
    public int[] shuffle() {
        if (nums == null) {
            return null;
        }

        int i = nums.length;
        int[] clone = nums.clone();

        while (i > 0) {
            int j = random.nextInt(i);
            i -= 1;
            swap(clone, i, j);
        }

        return clone;
    }

    void swap(int[] nums, int a, int b) {
        int t = nums[a];
        nums[a] = nums[b];
        nums[b] = t;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(nums);
 * int[] param_1 = obj.reset();
 * int[] param_2 = obj.shuffle();
 */

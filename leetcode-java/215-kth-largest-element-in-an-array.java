public class Solution {
    public int findKthLargest(int[] nums, int k) {
        shuffle(nums);

        k = nums.length - k;

        int lo = 0;
        int hi = nums.length - 1;

        while (lo < hi) {
            int j = partition(nums, lo, hi);
            if (j == k) {
                break;
            } else if (j < k) {
                lo = j + 1;
            } else {
                hi = j - 1;
            }
        }

        return nums[k];
    }

    void shuffle(int[] nums) {
        int i = nums.length;
        Random random = new Random();
        while (i > 0) {
            int j = random.nextInt(i);
            i--;
            swap(nums, i, j);
        }
    }

    int partition(int[] nums, int lo, int hi) {
        int pivot = nums[hi];
        for (int i = lo; i < hi; i++) {
            if (nums[i] < pivot) {
                swap(nums, i, lo);
                lo++;
            }
        }
        swap(nums, lo, hi);
        return lo;
    }

    void swap(int[] nums, int a, int b) {
        int t = nums[a];
        nums[a] = nums[b];
        nums[b] = t;
    }
}

public class Solution {
    public int[] maxNumber(int[] nums1, int[] nums2, int k) {
        int[] res = new int[k];
        for (int i = Math.max(0, k - nums2.length); i <= k && i <= nums1.length; i++) {
            int[] candidates = merge(select(nums1, i), select(nums2, k - i));
            if (greater(candidates, 0, res, 0)) {
                res = candidates;
            }
        }
        return res;
    }

    private int[] select(int[] nums, int k) {
        int[] res = new int[k];
        int j = 0;
        for (int i = 0; i < nums.length; i++) {
            while (nums.length - i + j > k && j > 0 && nums[i] > res[j - 1]) {
                j--;
            }
            if (j < k) {
                res[j] = nums[i];
                j++;
            }
        }
        return res;
    }

    private int[] merge(int[] nums1, int[] nums2) {
        int[] res = new int[nums1.length + nums2.length];
        int i = 0;
        int j = 0;
        while (i + j < nums1.length + nums2.length) {
            if (greater(nums1, i, nums2, j)) {
                res[i + j] = nums1[i];
                i++;
            } else {
                res[i + j] = nums2[j];
                j++;
            }
        }
        return res;
    }

    private boolean greater(int[] nums1, int i, int[] nums2, int j) {
        while (i < nums1.length && j < nums2.length && nums1[i] == nums2[j]) {
            i++;
            j++;
        }
        return j == nums2.length || (i < nums1.length && nums1[i] > nums2[j]);
    }
}

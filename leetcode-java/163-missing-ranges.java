public class Solution {
    public List<String> findMissingRanges(int[] nums, int lower, int upper) {
        List<String> res = new ArrayList<>();
        int pre = lower - 1;
        for (int i = 0; i <= nums.length; i++) {
            int n = i == nums.length ? upper + 1 : nums[i];
            if (pre + 2 == n) {
                res.add(String.valueOf(pre + 1));
            } else if (pre + 2 < n) {
                res.add(String.valueOf(pre + 1) + "->" + String.valueOf(n - 1));
            }
            pre = n;
        }
        return res;
    }
}

public class Solution {
    public List<List<Integer>> permuteUnique(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList<>();
        helper(nums, res, 0);
        return res;
    }

    void helper(int[] nums, List<List<Integer>> res, int index) {
        if (index == nums.length) {
            List<Integer> ans = new ArrayList<>();
            for (int x : nums) {
                ans.add(x);
            }
            res.add(ans);
            return;
        }

        for (int i = index; i < nums.length; i++) {
            if (i == index || nums[i] != nums[index]) {
                swap(nums, index, i);
                helper(nums.clone(), res, index + 1);
            }
        }
    }

    void swap(int[] nums, int a, int b) {
        int t = nums[a];
        nums[a] = nums[b];
        nums[b] = t;
    }
}

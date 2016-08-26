public class Solution {
    public List<List<Integer>> permute(int[] nums) {
        if (nums.length == 0) {
            return new ArrayList<>();
        }

        List<List<Integer>> res = new ArrayList<>();
        res.add(Arrays.asList(nums[0]));

        for (int i = 1; i < nums.length; i++) {
            List<List<Integer>> newRes = new ArrayList<>();
            for (List<Integer> r : res) {
                for (int j = 0; j <= i; j++) {
                    List<Integer> n = new ArrayList<>(r);
                    n.add(j, nums[i]);
                    newRes.add(n);
                }
            }
            res = newRes;
        }

        return res;
    }
}

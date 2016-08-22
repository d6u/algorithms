public class Solution {
    public List<String> summaryRanges(int[] nums) {
        if (nums.length == 1) {
            return Arrays.asList(Integer.toString(nums[0]));
        }

        List<String> res = new ArrayList<>();

        int i = 0;

        while (i < nums.length) {
            int a = nums[i];
            while (i + 1 < nums.length && nums[i + 1] - nums[i] == 1) {
                i++;
            }
            if (a == nums[i]) {
                res.add(Integer.toString(a));
            } else {
                res.add(a + "->" + nums[i]);
            }
            i++;
        }

        return res;
    }
}

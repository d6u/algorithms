public class Solution {
    public List<Integer> largestDivisibleSubset(int[] nums) {
        Arrays.sort(nums);

        int n = nums.length;
        int[] counts = new int[n];
        int[] child = new int[n];

        int count = 0;
        int index = 0;

        for (int i = 0; i < n; i++) {
            for (int j = i; j >= 0; j--) {
                if (nums[i] % nums[j] == 0 && counts[j] + 1 > counts[i]) {
                    counts[i] = counts[j] + 1;
                    child[i] = j;

                    if (counts[i] > count) {
                        count = counts[i];
                        index = i;
                    }
                }
            }
        }

        List<Integer> res = new ArrayList<>();

        while (count > 0) {
            count--;
            res.add(nums[index]);
            index = child[index];
        }

        return res;
    }
}

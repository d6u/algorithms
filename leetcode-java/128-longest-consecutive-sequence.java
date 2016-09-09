public class Solution {
    public int longestConsecutive(int[] nums) {
        int max = 0;
        Map<Integer, Integer> map = new HashMap<>();

        for (int n : nums) {
            if (!map.containsKey(n)) {
                int left = map.getOrDefault(n - 1, 0);
                int right = map.getOrDefault(n + 1, 0);
                int sum = left + 1 + right;

                map.put(n, sum);
                map.put(n - left, sum);
                map.put(n + right, sum);

                max = Math.max(max, sum);
            }
        }

        return max;
    }
}

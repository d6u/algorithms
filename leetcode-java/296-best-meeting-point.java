public class Solution {
    public int minTotalDistance(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        List<Integer> xs = new ArrayList<>();
        List<Integer> ys = new ArrayList<>();

        for (int x = 0; x < m; x++) {
            for (int y = 0; y < n; y++) {
                if (grid[x][y] == 1) {
                    xs.add(x);
                    ys.add(y);
                }
            }
        }

        return getShortest(xs) + getShortest(ys);
    }

    int getShortest(List<Integer> nums) {
        Collections.sort(nums);
        int left = 0;
        int right = nums.size() - 1;
        int res = 0;

        while (left < right) {
            res += nums.get(right) - nums.get(left);
            left++;
            right--;
        }

        return res;
    }
}

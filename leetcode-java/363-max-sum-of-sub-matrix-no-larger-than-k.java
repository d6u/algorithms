public class Solution {
    public int maxSumSubmatrix(int[][] matrix, int k) {
        if (matrix.length == 0) {
            return 0;
        }

        int row = matrix.length;
        int col = matrix[0].length;
        int m = Math.min(row, col);
        int n = Math.max(row, col);
        boolean fewerRows = row < col;
        int max = Integer.MIN_VALUE;

        for (int i = 0; i < m; i++) {
            int[] sums = new int[n];

            for (int j = i; j < m; j++) {
                int sum = 0;
                TreeSet<Integer> set = new TreeSet<>();
                set.add(0);

                for (int t = 0; t < n; t++) {
                    sums[t] += fewerRows ? matrix[j][t] : matrix[t][j];
                    sum += sums[t];
                    Integer val = set.ceiling(sum - k);
                    if (val != null) {
                        max = Math.max(max, sum - val);
                    }
                    set.add(sum);
                }
            }
        }

        return max;
    }
}

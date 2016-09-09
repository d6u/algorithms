public class Solution {
    public int longestIncreasingPath(int[][] matrix) {
        if (matrix.length == 0) {
            return 0;
        }

        int m = matrix.length;
        int n = matrix[0].length;
        int[][] distances = new int[m][n];
        int max = 0;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                max = Math.max(max, dfs(matrix, m, n, distances, i, j, Integer.MIN_VALUE));
            }
        }

        return max;
    }

    int dfs(int[][] matrix, int m, int n, int[][] distances, int i, int j, int curr) {
        if (i < 0 || i >= m || j < 0 || j >= n || curr >= matrix[i][j]) {
            return 0;
        }

        if (distances[i][j] != 0) {
            return distances[i][j];
        }

        int max = 0;

        max = Math.max(max, dfs(matrix, m, n, distances, i - 1, j, matrix[i][j]));
        max = Math.max(max, dfs(matrix, m, n, distances, i + 1, j, matrix[i][j]));
        max = Math.max(max, dfs(matrix, m, n, distances, i, j - 1, matrix[i][j]));
        max = Math.max(max, dfs(matrix, m, n, distances, i, j + 1, matrix[i][j]));

        distances[i][j] = max + 1;

        return max + 1;
    }
}

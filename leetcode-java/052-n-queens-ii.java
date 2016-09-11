public class Solution {
    public int totalNQueens(int n) {
        return helper(n, 0, 0, new HashSet<Integer>(), new HashSet<Integer>(), new HashSet<Integer>());
    }

    private int helper(int n, int row, int count, Set<Integer> cols, Set<Integer> diag1s, Set<Integer> diag2s) {
        for (int col = 0; col < n; col++) {
            if (cols.contains(col)) {
                continue;
            }

            int diag1 = row - col;
            if (diag1s.contains(diag1)) {
                continue;
            }

            int diag2 = row + col;
            if (diag2s.contains(diag2)) {
                continue;
            }

            if (row == n - 1) {
                count += 1;
            } else {
                cols.add(col);
                diag1s.add(diag1);
                diag2s.add(diag2);

                count = helper(n, row + 1, count, cols, diag1s, diag2s);

                diag2s.remove(diag2);
                diag1s.remove(diag1);
                cols.remove(col);
            }
        }

        return count;
    }
}

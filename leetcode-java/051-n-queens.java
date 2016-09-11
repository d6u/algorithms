public class Solution {
    public List<List<String>> solveNQueens(int n) {
        char[][] queens = new char[n][n];
        for (int i = 0; i < n; i++) {
            Arrays.fill(queens[i], '.');
        }
        boolean[] occupied = new boolean[5 * n - 2];
        List<List<String>> res = new ArrayList<>();
        helper(n, 0, queens, occupied, res);
        return res;
    }

    private void helper(int n, int row, char[][] queens, boolean[] occupied, List<List<String>> res) {
        for (int col = 0; col < n; col++) {
            if (occupied[col]) {
                continue;
            }

            int diag1 = n + row + col;
            if (occupied[diag1]) {
                continue;
            }

            int diag2 = n + 2 * n - 1 + n - 1 + row - col;
            if (occupied[diag2]) {
                continue;
            }

            queens[row][col] = 'Q';

            if (row == n - 1) {
                List<String> solution = new ArrayList<>();
                for (char[] queensRow : queens) {
                    String s = String.valueOf(queensRow);
                    solution.add(s);
                }
                res.add(solution);
            } else {
                occupied[col] = true;
                occupied[diag1] = true;
                occupied[diag2] = true;

                helper(n, row + 1, queens, occupied, res);

                occupied[col] = false;
                occupied[diag1] = false;
                occupied[diag2] = false;
            }

            queens[row][col] = '.';
        }
    }
}

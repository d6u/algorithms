public class Solution {
    public void gameOfLife(int[][] board) {
        int m = board.length;
        int n = board[0].length;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int count = -board[i][j];
                int iLower = Math.max(0, i - 1);
                int iUpper = Math.min(m - 1, i + 1);
                int jLower = Math.max(0, j - 1);
                int jUpper = Math.min(n - 1, j + 1);
                for (int ii = iLower; ii <= iUpper; ii++) {
                    for (int jj = jLower; jj <= jUpper; jj++) {
                        count += board[ii][jj] & 0b1;
                    }
                }
                if ((count | board[i][j]) == 0b11) {
                    board[i][j] |= 0b10;
                }
            }
        }

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                board[i][j] >>= 1;
            }
        }
    }
}

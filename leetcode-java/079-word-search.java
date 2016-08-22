public class Solution {
    public boolean exist(char[][] board, String word) {
        int m = board.length;
        int n = board[0].length;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (helper(board, m, n, word, i, j, 0)) {
                    return true;
                }
            }
        }

        return false;
    }

    int[][] DIRS = {
        {0, -1},
        {0, 1},
        {-1, 0},
        {1, 0}
    };

    boolean helper(char[][] board, int m, int n, String word, int x, int y, int pos) {
        if (pos == word.length()) {
            return true;
        }

        if (x < 0 || x >= m || y < 0 || y >= n || word.charAt(pos) != board[x][y]) {
            return false;
        }

        char c = board[x][y];
        board[x][y] = '*';

        for (int[] DIR : DIRS) {
            if (helper(board, m, n, word, x + DIR[0], y + DIR[1], pos + 1)) {
                return true;
            }
        }

        board[x][y] = c;

        return false;
    }
}

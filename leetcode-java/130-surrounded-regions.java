public class Solution {
    public void solve(char[][] board) {
        if (board.length == 0) {
            return;
        }

        int m = board.length;
        int n = board[0].length;

        for (int i = 0; i < m; i++) {
            if (board[i][0] == 'O') {
                dfs(board, m, n, i, 0);
            }
            if (board[i][n - 1] == 'O') {
                dfs(board, m, n, i, n - 1);
            }
        }

        for (int i = 0; i < n; i++) {
            if (board[0][i] == 'O') {
                dfs(board, m, n, 0, i);
            }
            if (board[m - 1][i] == 'O') {
                dfs(board, m, n, m - 1, i);
            }
        }

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == 'O') {
                    board[i][j] = 'X';
                } else if (board[i][j] == 'Y') {
                    board[i][j] = 'O';
                }
            }
        }
    }

    void dfs(char[][] board, int m, int n, int x, int y) {
        board[x][y] = 'Y';

        Queue<Integer> queue = new LinkedList<>();

        queue.offer(x * n + y);

        while (queue.peek() != null) {
            Integer id = queue.poll();
            int i = id / n;
            int j = id % n;

            if (i > 0 && board[i - 1][j] == 'O') {
                board[i - 1][j] = 'Y';
                queue.offer((i - 1) * n + j);
            }

            if (i < m - 1 && board[i + 1][j] == 'O') {
                board[i + 1][j] = 'Y';
                queue.offer((i + 1) * n + j);
            }

            if (j > 0 && board[i][j - 1] == 'O') {
                board[i][j - 1] = 'Y';
                queue.offer(i * n + j - 1);
            }

            if (j < n - 1 && board[i][j + 1] == 'O') {
                board[i][j + 1] = 'Y';
                queue.offer(i * n + j + 1);
            }
        }
    }
}

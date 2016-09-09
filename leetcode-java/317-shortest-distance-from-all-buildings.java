public class Solution {
    public int shortestDistance(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        int[][] dist = new int[m][n];
        int mark = 0;
        int min = 0;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    min = bfs(grid, m, n, dist, i, j, mark);
                    mark -= 1;
                }
            }
        }

        return min != Integer.MAX_VALUE ? min : -1;
    }

    static int[][] directions = {
        {1, 0},
        {-1, 0},
        {0, 1},
        {0, -1}
    };

    int bfs(int[][] grid, int m, int n, int[][] dist, int i, int j, int mark) {
        Queue<int[]> queue = new LinkedList<>();

        int[] initial = {i, j};
        queue.offer(initial);

        int level = 0;
        int min = Integer.MAX_VALUE;

        while (!queue.isEmpty()) {
            level += 1;
            int size = queue.size();

            for (int k = 0; k < size; k++) {
                int[] pair = queue.poll();

                for (int[] direction : directions) {
                    int x = pair[0] + direction[0];
                    int y = pair[1] + direction[1];

                    if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] == mark) {
                        dist[x][y] += level;
                        grid[x][y] = mark - 1;
                        min = Math.min(min, dist[x][y]);
                        int[] newPair = {x, y};
                        queue.offer(newPair);
                    }
                }
            }
        }

        return min;
    }
}

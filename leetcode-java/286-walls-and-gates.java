public class Solution {
    public void wallsAndGates(int[][] rooms) {
        for (int i = 0; i < rooms.length; i++) {
            for (int j = 0; j < rooms[0].length; j++) {
                if (rooms[i][j] == 0) {
                    helper(rooms, i, j, 0);
                }
            }
        }
    }

    private void helper(int[][] rooms, int i, int j, int d) {
        if (i < 0 || i >= rooms.length || j < 0 || j >= rooms[0].length || rooms[i][j] < d) {
            return;
        }
        rooms[i][j] = d;
        helper(rooms, i - 1, j, d + 1);
        helper(rooms, i + 1, j, d + 1);
        helper(rooms, i, j - 1, d + 1);
        helper(rooms, i, j + 1, d + 1);
    }
}

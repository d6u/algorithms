public class Solution {
    public int minCost(int[][] costs) {
        int n = costs.length;
        int r = 0;
        int g = 0;
        int b = 0;
        for (int i = 0; i < n; i++) {
            int rr = r;
            int gg = g;
            int bb = b;
            r = costs[i][0] + Math.min(bb, gg);
            g = costs[i][1] + Math.min(rr, bb);
            b = costs[i][2] + Math.min(rr, gg);
        }
        return Math.min(Math.min(r, g), b);
    }
}

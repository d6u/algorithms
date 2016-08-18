public class Solution {
    public int countComponents(int n, int[][] edges) {
        int[] roots = new int[n];
        for (int i = 0; i < n; i++) {
            roots[i] = i;
        }
        for (int[] edge : edges) {
            int a = find(roots, edge[0]);
            int b = find(roots, edge[1]);
            if (a != b) {
                n--;
                roots[a] = b;
            }
        }
        return n;
    }

    public int find(int[] roots, int a) {
        while (roots[a] != a) {
            roots[a] = roots[roots[a]];
            a = roots[a];
        }
        return a;
    }
}

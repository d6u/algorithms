public class Solution {
    public int uniquePaths(int m, int n) {
        if (m == 1 || n == 1) {
            return 1;
        }

        if (m < n) {
            int t = m;
            m = n;
            n = t;
        }

        m--;
        n--;

        long res = 1;
        int j = m + 1;
        int i = 1;

        while (j <= m + n) {
            res *= j;
            res /= i;
            i++;
            j++;
        }

        return (int) res;
    }
}

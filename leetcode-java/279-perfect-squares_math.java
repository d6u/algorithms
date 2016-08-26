public class Solution {
    public int numSquares(int n) {
        while (n % 4 == 0) {
            n /= 4;
        }

        if (n % 8 == 7) {
            return 4;
        }

        for (int a = 0; a * a <= n; a++) {
            int b = (int) Math.sqrt(n - a * a);
            if (a * a + b * b == n) {
                return (a == 0 ? 0 : 1) + (b == 0 ? 0 : 1);
            }
        }

        return 3;
    }
}

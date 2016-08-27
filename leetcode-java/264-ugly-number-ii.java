public class Solution {
    public int nthUglyNumber(int n) {
        int[] ugly = new int[n];

        int index2 = 0;
        int index3 = 0;
        int index5 = 0;

        int factor2 = 1;
        int factor3 = 1;
        int factor5 = 1;

        int next = 1;

        for (int i = 0; i < n; i++) {
            ugly[i] = next;

            if (ugly[i] == factor2) {
                factor2 = ugly[index2] * 2;
                index2++;
            }

            if (ugly[i] == factor3) {
                factor3 = ugly[index3] * 3;
                index3++;
            }

            if (ugly[i] == factor5) {
                factor5 = ugly[index5] * 5;
                index5++;
            }

            next = Math.min(factor2, Math.min(factor3, factor5));
        }

        return ugly[n - 1];
    }
}

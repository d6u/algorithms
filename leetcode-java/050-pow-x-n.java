public class Solution {
    public double myPow(double x, int n) {
        if (n < 0) {
            return 1/ pow(x, -n);
        } else {
            return pow(x, n);
        }
    }

    double pow(double x, int n) {
        if (n == 0) {
            return 1;
        }

        double p = pow(x, n / 2);

        if (n % 2 == 0) {
            return p * p;
        } else {
            return p * p * x;
        }
    }
}

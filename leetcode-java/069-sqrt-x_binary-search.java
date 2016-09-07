public class Solution {
    public int mySqrt(int x) {
        if (x <= 1) {
            return x;
        }

        int left = 1;
        int right = x;

        while (left <= right) {
            int mid = (left + right) / 2;
            if (mid == x / mid) {
                return mid;
            } else if (mid < x / mid) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return left - 1;
    }
}

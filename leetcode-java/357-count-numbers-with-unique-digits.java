public class Solution {
    public int countNumbersWithUniqueDigits(int n) {
        if (n == 0) {
            return 1;
        }

        int res = 10;
        int remaining = 9;
        int unique = 9;

        while (n > 1 && remaining > 0) {
            unique *= remaining;
            res += unique;
            remaining--;
            n--;
        }

        return res;
    }
}

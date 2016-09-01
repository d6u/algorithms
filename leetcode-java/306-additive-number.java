public class Solution {
    public boolean isAdditiveNumber(String num) {
        int n = num.length();

        for (int i = 1; i <= n / 2; i++) {
            for (int j = 1; Math.max(i, j) <= n - i - j; j++) {
                if (isValid(num, i, j)) {
                    return true;
                }
            }
        }

        return false;
    }

    boolean isValid(String num, int len1, int len2) {
        if (num.charAt(0) == '0' && len1 > 1) {
            return false;
        }
        if (num.charAt(len1) == '0' && len2 > 1) {
            return false;
        }

        Long x1 = Long.parseLong(num.substring(0, len1));
        Long x2 = Long.parseLong(num.substring(len1, len1 + len2));
        int pos = len1 + len2;

        while (pos < num.length()) {
            x2 = x1 + x2;
            x1 = x2 - x1;
            String sum = x2.toString();
            if (!num.startsWith(sum, pos)) {
                return false;
            }
            pos += sum.length();
        }

        return true;
    }
}

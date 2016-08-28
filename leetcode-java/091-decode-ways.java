public class Solution {
    public int numDecodings(String s) {
        int l = s.length();

        if (l == 0) {
            return 0;
        }

        int second = 1;
        int first = s.charAt(l - 1) == '0' ? 0 : 1;

        for (int i = l - 2; i >= 0; i--) {
            if (s.charAt(i) == '0') {
                second = first;
                first = 0;
            } else if (i < l - 1 && Integer.parseInt(s.substring(i, i + 2)) <= 26) {
                // don't have to parseInt, can save int value from last time

                int t = first;
                first = first + second;
                second = t;
            } else {
                second = first;
            }
        }

        return first;
    }
}

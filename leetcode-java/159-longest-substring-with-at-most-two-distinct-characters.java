public class Solution {
    public int lengthOfLongestSubstringTwoDistinct(String s) {
        int a = 0;
        int b = -1;
        int max = 0;

        for (int i = 1; i < s.length(); i++) {
            if (s.charAt(i) == s.charAt(i - 1)) {
                continue;
            }

            if (b > -1 && s.charAt(i) != s.charAt(b)) {
                max = Math.max(max, i - a);
                a = b + 1;
            }

            b = i - 1;
        }

        return max > s.length() - a ? max : s.length() - a;
    }
}

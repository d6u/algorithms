public class Solution {
    public int lengthOfLongestSubstringKDistinct(String s, int k) {
        int[] count = new int[256];
        int len = 0;
        int start = 0;
        int max = 0;

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            count[c]++;
            if (count[c] <= 1) {
                len++;
            }
            if (len > k) {
                while (--count[s.charAt(start++)] > 0);
                len--;
            }
            max = Math.max(max, i - start + 1);
        }

        return max;
    }
}

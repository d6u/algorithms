public class Solution {
    public int lengthOfLongestSubstring(String s) {
        if (s.length() == 0) {
            return 0;
        }
        int[] map = new int[256];
        int max = 0;
        for (int i = 0, j = 0; i < s.length(); ++i) {
            if (map[s.charAt(i) - ' '] != 0) {
                j = Math.max(j, map[s.charAt(i) - ' ']);
            }
            map[s.charAt(i) - ' '] = i + 1;
            max = Math.max(max, i - j + 1);
        }
        return max;
    }
}

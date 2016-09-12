public class Solution {
    public String rearrangeString(String str, int k) {
        int n = str.length();
        int[] count = new int[26];
        int[] valid = new int[26];

        for (int i = 0; i < n; i++) {
            count[str.charAt(i) - 'a']++;
        }

        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < n; i++) {
            int pos = findPos(count, valid, i);
            if (pos == -1) {
                return "";
            }
            count[pos]--;
            sb.append((char) ('a' + pos));
            valid[pos] = i + k;
        }

        return sb.toString();
    }

    private int findPos(int[] count, int[] valid, int index) {
        int pos = -1;
        int max = 0;
        for (int i = 0; i < count.length; i++) {
            if (count[i] > 0 && count[i] > max && valid[i] <= index) {
                pos = i;
                max = count[i];
            }
        }
        return pos;
    }
}

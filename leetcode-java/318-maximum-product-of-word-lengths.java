public class Solution {
    public int maxProduct(String[] words) {
        int n = words.length;
        int[] values = new int[n];

        for (int i = 0; i < n; i++) {
            String word = words[i];
            for (char c : word.toCharArray()) {
                values[i] |= 1 << (c - 'a');
            }
        }

        int max = 0;

        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if ((values[i] & values[j]) == 0 && words[i].length() * words[j].length() > max) {
                    max = words[i].length() * words[j].length();
                }
            }
        }

        return max;
    }
}

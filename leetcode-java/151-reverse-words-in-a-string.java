public class Solution {
    public String reverseWords(String s) {
        String[] parts = s.trim().split("\\s+");
        StringBuilder sb = new StringBuilder();

        for (int i = parts.length - 1; i > 0; i--) {
            sb.append(parts[i] + " ");
        }

        sb.append(parts[0]);

        return sb.toString();
    }
}

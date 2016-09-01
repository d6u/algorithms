public class Solution {
    public int lengthLongestPath(String input) {
        int max = 0;
        String[] lines = input.split("\n");
        int[] lengths = new int[lines.length + 1];

        for (String line : lines) {
            String[] parts = line.split("\t");
            int level = parts.length;
            String object = parts[parts.length - 1];
            int length = lengths[level - 1] + object.length();

            if (object.contains(".")) {
                max = Math.max(max, length);
            } else {
                lengths[level] = length + 1;
            }
        }

        return max;
    }
}

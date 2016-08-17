public class Solution {
    public int shortestWordDistance(String[] words, String word1, String word2) {
        long dist = Integer.MAX_VALUE;
        long i1 = dist;
        long i2 = -dist;
        boolean same = word1.equals(word2);

        for (int i = 0; i < words.length; i++) {
            if (words[i].equals(word1)) {
                if (same) {
                    i1 = i2;
                    i2 = i;
                } else {
                    i1 = i;
                }
            } else if (words[i].equals(word2)) {
                i2 = i;
            }
            dist = Math.min(dist, Math.abs(i1 - i2));
        }

        return (int) dist;
    }
}

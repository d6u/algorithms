public class Solution {
    public int maxEnvelopes(int[][] envelopes) {
        Arrays.sort(envelopes, new Comparator<int[]>(){
            public int compare(int[] a, int[] b){
                if (a[0] == b[0]) {
                    return b[1] - a[1];
                } else {
                    return a[0] - b[0];
                }
           }
        });

        int[] heights = new int[envelopes.length];
        int i = 0;

        for (int[] envelope : envelopes) {
            int index = Arrays.binarySearch(heights, 0, i, envelope[1]);
            if (index < 0) {
                index = -(index + 1);
            }
            heights[index] = envelope[1];
            if (index == i) {
                i++;
            }
        }

        return i;
    }
}

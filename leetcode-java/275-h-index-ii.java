public class Solution {
    public int hIndex(int[] citations) {
        int left = 0;
        int right = citations.length - 1;
        int len = citations.length;

        while (left <= right) {
            int mid = (left + right) / 2;

            if (citations[mid] == len - mid) {
                return citations[mid];
            } else if (citations[mid] > len - mid) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return len - (right + 1);
    }
}

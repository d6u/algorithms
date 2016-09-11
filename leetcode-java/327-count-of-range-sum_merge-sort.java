public class Solution {
    public int countRangeSum(int[] nums, int lower, int upper) {
        int m = nums.length;
        long[] sums = new long[m + 1];
        for (int i = 0; i < m; i++) {
            sums[i + 1] = sums[i] + nums[i];
        }
        return countWhileMergeSort(lower, upper, sums, 0, sums.length - 1);
    }

    private int countWhileMergeSort(int lower, int upper, long[] sums, int start, int end) {
        if (start == end) {
            return 0;
        }

        int mid = (start + end) / 2;

        int count = countWhileMergeSort(lower, upper, sums, start, mid) +
            countWhileMergeSort(lower, upper, sums, mid + 1, end);

        long[] cache = new long[end - start + 1];

        int k = mid + 1;
        int j = mid + 1;
        int l = start;
        int r = mid + 1;
        int i = 0;

        while (l <= mid) {
            while (k <= end && sums[k] - sums[l] < lower) {
                k++;
            }
            while (j <= end && sums[j] - sums[l] <= upper) {
                j++;
            }
            count += j - k;
            while (r <= end && sums[r] < sums[l]) {
                cache[i] = sums[r];
                i++;
                r++;
            }
            cache[i] = sums[l];
            i++;
            l++;
        }

        for (int x = 0; x < i; x++) {
            sums[start + x] = cache[x];
        }

        return count;
    }
}

 public class Solution {
    public boolean containsNearbyAlmostDuplicate(int[] nums, int k, int t) {
        if (k < 1 || t < 0) {
            return false;
        }

        Map<Long, Long> map = new LinkedHashMap<>();
        long bucketSize = (long) t + 1;

        for (int i = 0; i < nums.length; i++) {
            long n = (long) nums[i] - Integer.MIN_VALUE;
            long bucket = n / bucketSize;

            if (map.containsKey(bucket)
                || (map.containsKey(bucket - 1) && n - map.get(bucket - 1) <= t)
                || (map.containsKey(bucket + 1) && map.get(bucket + 1) - n <= t)) {

                return true;
            }

            map.put(bucket, n);

            if (i >= k) {
                map.remove(((long) nums[i - k] - Integer.MIN_VALUE) / bucketSize);
            }
        }

        return false;
    }
}

public class Solution {
    public boolean isReflected(int[][] points) {
        Set<Integer> set = new HashSet<>();
        int maxX = Integer.MIN_VALUE;
        int minX = Integer.MAX_VALUE;

        for (int[] point : points) {
            maxX = Math.max(maxX, point[0]);
            minX = Math.min(minX, point[0]);
            set.add(Arrays.hashCode(point));
        }

        int sum = maxX + minX;

        for (int[] point : points) {
            if (!set.contains(Arrays.hashCode(new int[]{sum - point[0], point[1]}))) {
                return false;
            }
        }

        return true;
    }
}

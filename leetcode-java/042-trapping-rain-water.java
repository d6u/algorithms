public class Solution {
    public int trap(int[] height) {
        int maxLeftHeight = 0;
        int maxRightHeight = 0;
        int left = 0;
        int right = height.length - 1;
        int res = 0;

        while (left <= right) {
            if (height[left] < height[right]) {
                if (height[left] > maxLeftHeight) {
                    maxLeftHeight = height[left];
                } else {
                    res += maxLeftHeight - height[left];
                }
                left++;
            } else {
                if (height[right] > maxRightHeight) {
                    maxRightHeight = height[right];
                } else {
                    res += maxRightHeight - height[right];
                }
                right--;
            }
        }

        return res;
    }
}

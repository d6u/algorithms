public class Solution {
    public boolean increasingTriplet(int[] nums) {
        int smallest = Integer.MAX_VALUE;
        int smaller = Integer.MAX_VALUE;
        for (int n : nums) {
            if (n <= smallest) {
                smallest = n;
            } else if (n <= smaller) {
                smaller = n;
            } else {
                return true;
            }
        }
        return false;
    }
}

public class Solution {
    public int singleNumber(int[] nums) {
        int n1 = 0;
        int n2 = 0;
        for (int n : nums) {
            n2 |= n1 & n;
            n1 ^= n;
            int n3 = n1 & n2;
            n1 ^= n3;
            n2 ^= n3;
        }
        return n1;
    }
}

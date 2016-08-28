public class Solution {
    public String getPermutation(int n, int k) {
        int[] factorials = new int[n + 1];
        factorials[0] = 1;

        for (int i = 1; i < n; i++) {
            factorials[i] = factorials[i - 1] * i;
        }

        List<Integer> nums = new LinkedList<>();

        for (int i = 1; i <= n; i++) {
            nums.add(i);
        }

        k -= 1;

        StringBuilder sb = new StringBuilder();

        for (int i = n - 1; i >= 0; i--) {
            int index = k / factorials[i];
            sb.append(nums.remove(index));
            k %= factorials[i];
        }

        return sb.toString();
    }
}

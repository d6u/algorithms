public class Solution {
    public String multiply(String num1, String num2) {
        int m = num1.length();
        int n = num2.length();
        int[] nums = new int[m + n];

        for (int i = m - 1; i >= 0; i--) {
            for (int j = n - 1; j >= 0; j--) {
                int product = (num1.charAt(i) - '0') * (num2.charAt(j) - '0');
                int sum = nums[i + j + 1] + product;
                nums[i + j + 1]  = sum % 10;
                nums[i + j] += sum / 10;
            }
        }

        StringBuilder sb = new StringBuilder();

        for (int x : nums) {
            if (sb.length() != 0 || x != 0) {
                sb.append(x);
            }
        }

        return sb.length() == 0 ? "0" : sb.toString();
    }
}

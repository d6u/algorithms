public class Solution {
    public int calculate(String s) {
        Stack<Integer> nums = new Stack<>();

        int num = 0;
        char sign = '+';

        char[] chars = s.toCharArray();

        for (int i = 0; i < chars.length; i++) {
            char c = chars[i];

            if (Character.isDigit(c)) {
                num = num * 10 + (c - '0');
            }

            if ((!Character.isDigit(c) && c != ' ') || i == chars.length - 1) {
                if (sign == '+') {
                    nums.push(num);
                } else if (sign == '-') {
                    nums.push(-num);
                } else if (sign == '*') {
                    nums.push(nums.pop() * num);
                } else if (sign == '/') {
                    nums.push(nums.pop() / num);
                }

                sign = c;
                num = 0;
            }
        }

        int sum = 0;

        for (int n : nums) {
            sum += n;
        }

        return sum;
    }
}

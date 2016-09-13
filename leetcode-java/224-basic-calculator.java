public class Solution {
    public int calculate(String s) {
        int res = 0;
        int sign = 1;
        int num = 0;
        Stack<Integer> stack = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            if (c == ' ') {
                continue;
            } else if (c == '+') {
                res += sign * num;
                sign = 1;
                num = 0;
            } else if (c == '-') {
                res += sign * num;
                sign = -1;
                num = 0;
            } else if (c == '(') {
                stack.push(res);
                stack.push(sign);
                sign = 1;
                res = 0;
            } else if (c == ')') {
                res += sign * num;
                res *= stack.pop();
                res += stack.pop();
                num = 0;
            } else {
                num = num * 10 + (int) (c - '0');
            }
        }

        res += sign * num;

        return res;
    }
}

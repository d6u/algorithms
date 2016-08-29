public class Solution {
    public int calculate(String s) {
        Stack<String> rpn = new Stack<>();
        Stack<String> ops = new Stack<>();

        for (String str : s.trim().split("\\b")) {
            String st = str.trim();
            if (st.equals("*") || st.equals("/")) {
                while (!ops.empty() && (ops.peek().equals("*") || ops.peek().equals("/"))) {
                    rpn.push(ops.pop());
                }
                ops.push(st);
            } else if (st.equals("+") || st.equals("-")) {
                while (!ops.empty()) {
                    rpn.push(ops.pop());
                }
                ops.push(st);
            } else {
                rpn.push(st);
            }
        }

        while (!ops.empty()) {
            rpn.push(ops.pop());
        }

        return evalRpn(rpn);
    }

    int evalRpn(Stack<String> rpn) {
        Stack<Integer> stack = new Stack<>();

        for (String token : rpn) {
            if (token.equals("+")) {
                int b = stack.pop();
                int a = stack.pop();
                stack.push(a + b);
            } else if (token.equals("-")) {
                int b = stack.pop();
                int a = stack.pop();
                stack.push(a - b);
            } else if (token.equals("*")) {
                int b = stack.pop();
                int a = stack.pop();
                stack.push(a * b);
            } else if (token.equals("/")) {
                int b = stack.pop();
                int a = stack.pop();
                stack.push(a / b);
            } else {
                stack.push(Integer.parseInt(token));
            }
        }

        return stack.pop();
    }
}

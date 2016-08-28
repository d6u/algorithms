public class Solution {
    public String simplifyPath(String path) {
        Stack<String> stack = new Stack<>();

        for (String part : path.split("/")) {
            if (part.equals("..")) {
                if (!stack.empty()) {
                    stack.pop();
                }
            } else if (!part.equals("") && !part.equals(".")) {
                stack.push(part);
            }
        }

        if (stack.empty()) {
            return "/";
        } else {
            StringBuilder sb = new StringBuilder();
            for (String part : stack) {
                sb.append("/" + part);
            }
            return sb.toString();
        }
    }
}

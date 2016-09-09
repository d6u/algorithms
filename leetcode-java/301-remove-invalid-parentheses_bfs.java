public class Solution {
    public List<String> removeInvalidParentheses(String s) {
        List<String> res = new LinkedList<>();
        Queue<String> queue = new LinkedList<>();
        Set<String> visited = new HashSet<>();
        boolean found = false;

        queue.offer(s);
        visited.add(s);

        while (!queue.isEmpty()) {
            String str = queue.poll();

            if (isValid(str)) {
                res.add(str);
                found = true;
            }

            if (!found) {
                for (int i = 0; i < str.length(); i++) {
                    if (str.charAt(i) == '(' || str.charAt(i) == ')') {
                        String newStr = str.substring(0, i) + str.substring(i + 1);
                        if (!visited.contains(newStr)) {
                            queue.offer(newStr);
                            visited.add(newStr);
                        }
                    }
                }
            }
        }

        return res;
    }

    boolean isValid(String s) {
        int count = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') {
                count++;
            } else if (c == ')') {
                count--;
                if (count < 0) {
                    return false;
                }
            }
        }
        return count == 0;
    }
}

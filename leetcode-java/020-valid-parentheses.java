public class Solution {
    public boolean isValid(String s) {
        Map<Character, Character> pairs = new HashMap<>();
        pairs.put('(', ')');
        pairs.put('{', '}');
        pairs.put('[', ']');

        Stack<Character> stack = new Stack<>();

        for (char c : s.toCharArray()) {
            // cannot directly check `char != null` in Java
            // because it will throw null pointer error
            if (stack.empty() || pairs.get(stack.peek()) == null || pairs.get(stack.peek()) != c) {
                stack.push(c);
            } else {
                stack.pop();
            }
        }

        return stack.size() == 0;
    }
}

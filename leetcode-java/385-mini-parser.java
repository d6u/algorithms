/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * public interface NestedInteger {
 *     // Constructor initializes an empty nested list.
 *     public NestedInteger();
 *
 *     // Constructor initializes a single integer.
 *     public NestedInteger(int value);
 *
 *     // @return true if this NestedInteger holds a single integer, rather than a nested list.
 *     public boolean isInteger();
 *
 *     // @return the single integer that this NestedInteger holds, if it holds a single integer
 *     // Return null if this NestedInteger holds a nested list
 *     public Integer getInteger();
 *
 *     // Set this NestedInteger to hold a single integer.
 *     public void setInteger(int value);
 *
 *     // Set this NestedInteger to hold a nested list and adds a nested integer to it.
 *     public void add(NestedInteger ni);
 *
 *     // @return the nested list that this NestedInteger holds, if it holds a nested list
 *     // Return null if this NestedInteger holds a single integer
 *     public List<NestedInteger> getList();
 * }
 */
public class Solution {
    public NestedInteger deserialize(String s) {
        if (s.isEmpty()) {
            return null;
        }
        if (s.charAt(0) != '[') {
            return new NestedInteger(Integer.parseInt(s));
        }

        Stack<NestedInteger> stack = new Stack<>();
        int n = s.length();
        NestedInteger curr = null;
        int l = 0;

        for (int i = 0; i < n; i++) {
            char c = s.charAt(i);
            if (c == '[') {
                if (curr != null) {
                    stack.push(curr);
                }
                curr = new NestedInteger();
                l = i + 1;
            } else if (c == ']') {
                String num = s.substring(l, i);
                if (!num.isEmpty()) {
                    curr.add(new NestedInteger(Integer.parseInt(num)));
                }
                if (!stack.empty()) {
                    NestedInteger next = stack.pop();
                    next.add(curr);
                    curr = next;
                }
                l = i + 1;
            } else if (c == ',') {
                String num = s.substring(l, i);
                if (!num.isEmpty()) {
                    curr.add(new NestedInteger(Integer.parseInt(num)));
                }
                l = i + 1;
            }
        }

        return curr;
    }
}

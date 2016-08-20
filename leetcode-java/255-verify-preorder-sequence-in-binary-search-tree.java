public class Solution {
    public boolean verifyPreorder(int[] preorder) {
        int low = Integer.MIN_VALUE;
        Stack<Integer> stack = new Stack<Integer>();
        for (int val : preorder) {
            if (val < low) {
                return false;
            } else {
                while (!stack.isEmpty() && val > stack.peek()) {
                    low = stack.pop();
                }
                stack.push(val);
            }
        }
        return true;
    }
}

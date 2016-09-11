/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        if (root == null) {
            return new LinkedList<>();
        }

        List<Integer> res = new LinkedList<>();
        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);
        TreeNode prev = null;

        while (!stack.isEmpty()) {
            TreeNode curr = stack.peek();

            if (prev == null || prev.left == curr || prev.right == curr) {
                if (curr.left != null) {
                    stack.push(curr.left);
                } else if (curr.right != null) {
                    stack.push(curr.right);
                }
            } else if (curr.left == prev && curr.right != null) {
                stack.push(curr.right);
            } else {
                res.add(curr.val);
                stack.pop();
            }

            prev = curr;
        }

        return res;
    }
}

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
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<Integer>();

        TreeNode node = root;
        Stack<TreeNode> stack = new Stack<TreeNode>();

        while (node != null) {
            res.add(node.val);
            if (node.right != null) {
                stack.push(node.right);
            }
            node = node.left;
            if (node == null && !stack.isEmpty()) {
                node = stack.pop();
            }
        }

        return res;
    }
}

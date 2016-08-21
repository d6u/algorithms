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
    public void flatten(TreeNode root) {
        helper(root, null);
    }

    TreeNode helper(TreeNode node, TreeNode prev) {
        if (node == null) {
            return prev;
        }

        prev = helper(node.right, prev);
        prev = helper(node.left, prev);

        node.right = prev;
        node.left = null;

        return node;
    }
}

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
    public int longestConsecutive(TreeNode root) {
        return helper(root, null, 0);
    }

    public int helper(TreeNode node, TreeNode parent, int len) {
        if (node == null) {
            return len;
        }

        if (parent != null) {
            len = node.val == parent.val + 1 ? len + 1 : 1;
        } else {
            len = 1;
        }

        int left = helper(node.left, node, len);
        int right = helper(node.right, node, len);

        return Math.max(len, Math.max(left, right));
    }
}

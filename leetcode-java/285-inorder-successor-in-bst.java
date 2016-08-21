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
    public TreeNode inorderSuccessor(TreeNode root, TreeNode p) {
        if (root == null) {
            return null;
        }

        if (p.val >= root.val) {
            return inorderSuccessor(root.right, p);
        } else {
            TreeNode successor = inorderSuccessor(root.left, p);
            return successor == null ? root : successor;
        }
    }
}

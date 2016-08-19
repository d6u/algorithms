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
    public int kthSmallest(TreeNode root, int k) {
        int count = countNodes(root.left);
        if (count + 1 == k) {
            return root.val;
        } else if (count + 1 > k) {
            return kthSmallest(root.left, k);
        } else {
            return kthSmallest(root.right, k - count - 1);
        }
    }

    public int countNodes(TreeNode root) {
        if (root == null) {
            return 0;
        } else {
            return 1 + countNodes(root.left) + countNodes(root.right);
        }
    }
}

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
    public int maxPathSum(TreeNode root) {
        int[] max = new int[1];
        max[0] = Integer.MIN_VALUE;

        helper(root, max);

        return max[0];
    }

    int helper(TreeNode root, int[] max) {
        if (root == null) {
            return 0;
        }

        int left = helper(root.left, max);
        int right = helper(root.right, max);

        int currentMax = Math.max(Math.max(root.val, root.val + left), root.val + right);
        max[0] = Math.max(Math.max(max[0], currentMax), root.val + left + right);

        return currentMax;
    }
}

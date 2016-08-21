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

    class Result {
        int size;
        int lower;
        int upper;
        Result(int size, int lower, int upper) {
            this.size = size;
            this.lower = lower;
            this.upper = upper;
        }
    }

    int max = 0;

    public int largestBSTSubtree(TreeNode root) {
        helper(root);
        return max;
    }

    Result helper(TreeNode node) {
        if (node == null) {
            return new Result(0, Integer.MAX_VALUE, Integer.MIN_VALUE);
        }

        Result left = helper(node.left);
        Result right = helper(node.right);

        if (left.size == -1 || right.size == -1 || left.upper >= node.val || right.lower <= node.val) {
            return new Result(-1, 0, 0);
        }

        int size = 1 + left.size + right.size;

        max = Math.max(max, size);

        return new Result(size, Math.min(left.lower, node.val), Math.max(right.upper, node.val));
    }
}

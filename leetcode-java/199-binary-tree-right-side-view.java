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
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> res = new LinkedList<Integer>();
        helper(res, root, 0);
        return res;
    }

    void helper(List<Integer> res, TreeNode node, int depth) {
        if (node == null) {
            return;
        }

        if (depth == res.size()) {
            res.add(node.val);
        }

        helper(res, node.right, depth + 1);
        helper(res, node.left, depth + 1);
    }
}

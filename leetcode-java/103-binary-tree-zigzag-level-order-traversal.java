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
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        helper(res, root, 0);
        return res;
    }

    void helper(List<List<Integer>> res, TreeNode node, int level) {
        if (node == null) {
            return;
        }

        if (res.size() == level) {
            res.add(new ArrayList<Integer>());
        }

        if (level % 2 == 0) {
            res.get(level).add(node.val);
        } else {
            res.get(level).add(0, node.val);
        }

        helper(res, node.left, level + 1);
        helper(res, node.right, level + 1);
    }
}

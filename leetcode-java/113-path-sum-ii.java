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
    public List<List<Integer>> pathSum(TreeNode root, int sum) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        List<Integer> cur = new ArrayList<Integer>();
        helper(res, cur, root, sum);
        return res;
    }

    void helper(List<List<Integer>> res, List<Integer> cur, TreeNode node, int sum) {
        if (node == null) {
            return;
        }
        cur.add(node.val);
        if (node.left == null && node.right == null && node.val == sum) {
            res.add(new ArrayList<Integer>(cur));
        } else {
            helper(res, cur, node.left, sum - node.val);
            helper(res, cur, node.right, sum - node.val);
        }
        cur.remove(cur.size() - 1);
    }
}

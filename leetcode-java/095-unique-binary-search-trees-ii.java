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
    public List<TreeNode> generateTrees(int n) {
        if (n == 0) {
            return new ArrayList<TreeNode>();
        }

        List<TreeNode>[] dp = new List[n + 1];

        dp[0] = new ArrayList<TreeNode>();
        dp[0].add(null);

        for (int i = 1; i <= n; i++) {
            dp[i] = new ArrayList<TreeNode>();
            for (int j = 1; j <= i; j++) {
                for (TreeNode leftNode : dp[j-1]) {
                    for (TreeNode rightNode : dp[i-j]) {
                        TreeNode node = new TreeNode(j);
                        node.left = leftNode;
                        node.right = clone(rightNode, j);
                        dp[i].add(node);
                    }
                }
            }
        }

        return dp[n];
    }

    TreeNode clone(TreeNode node, int offset) {
        if (node == null) {
            return null;
        }
        TreeNode clonedNode = new TreeNode(node.val + offset);
        clonedNode.left = clone(node.left, offset);
        clonedNode.right = clone(node.right, offset);
        return clonedNode;
    }
}

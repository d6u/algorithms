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
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        TreeNode root = new TreeNode(Integer.MAX_VALUE);

        Stack<TreeNode> stack = new Stack<TreeNode>();
        stack.push(root);

        TreeNode pp = null;
        int i = 0;
        int j = 0;

        while (j < inorder.length) {
            if (stack.peek().val == inorder[j]) {
                pp = stack.pop();
                j++;
            } else if (pp != null) {
                TreeNode node = new TreeNode(preorder[i]);
                pp.right = node;
                pp = null;
                stack.push(node);
                i++;
            } else {
                TreeNode node = new TreeNode(preorder[i]);
                stack.peek().left = node;
                stack.push(node);
                i++;
            }
        }

        return root.left;
    }
}

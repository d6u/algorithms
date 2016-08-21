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
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int i = 0; i < inorder.length; i++) {
            map.put(inorder[i], i);
        }
        TreeNode root = build(map, preorder, inorder, 0, preorder.length - 1, 0, inorder.length - 1);
        return root;
    }

    TreeNode build(Map<Integer, Integer> map, int[] preorder, int[] inorder, int preStart, int preEnd, int inStart, int inEnd) {
        if (preEnd - preStart < 0) {
            return null;
        }

        TreeNode node = new TreeNode(preorder[preStart]);

        int index = map.get(preorder[preStart]);
        int len = index - inStart;

        node.left = build(map, preorder, inorder, preStart + 1, preStart + len, inStart, inStart + len);
        node.right = build(map, preorder, inorder, preStart + len + 1, preEnd, index + 1, inEnd);

        return node;
    }
}

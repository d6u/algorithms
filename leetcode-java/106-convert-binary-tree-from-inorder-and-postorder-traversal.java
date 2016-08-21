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
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();

        for (int i = 0; i < inorder.length; i++) {
            map.put(inorder[i], i);
        }

        return build(map, inorder, postorder, 0, inorder.length - 1, 0, postorder.length - 1);
    }

    TreeNode build(Map<Integer, Integer> map, int[] inorder, int[] postorder, int inStart, int inEnd, int poStart, int poEnd) {
        if (inEnd - inStart < 0) {
            return null;
        }

        TreeNode node = new TreeNode(postorder[poEnd]);
        int index = map.get(postorder[poEnd]);
        int len = inEnd - index;

        node.left = build(map, inorder, postorder, inStart, index - 1, poStart, poEnd - len - 1);
        node.right = build(map, inorder, postorder, index + 1, inEnd, poEnd - len, poEnd - 1);

        return node;
    }
}

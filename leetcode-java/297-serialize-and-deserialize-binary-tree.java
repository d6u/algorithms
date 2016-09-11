/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Codec {

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        preorder(root, sb);
        return sb.toString();
    }

    void preorder(TreeNode node, StringBuilder sb) {
        if (node == null) {
            sb.append('#').append(',');
        } else {
            sb.append(node.val).append(',');
            preorder(node.left, sb);
            preorder(node.right, sb);
        }
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        Deque<String> queue = new LinkedList<>();
        queue.addAll(Arrays.asList(data.split(",")));
        return build(queue);
    }

    TreeNode build(Deque<String> queue) {
        String val = queue.remove();
        if (val.equals("#")) {
            return null;
        }
        TreeNode node = new TreeNode(Integer.valueOf(val));
        node.left = build(queue);
        node.right = build(queue);
        return node;
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));

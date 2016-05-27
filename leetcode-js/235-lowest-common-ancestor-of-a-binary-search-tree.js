/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (p.val > q.val) {
        return lowestCommonAncestor(root, q, p);
    }

    var node = root;

    while (node) {
        if (p.val === node.val) {
            return node;
        }
        if (q.val === node.val) {
            return node;
        }
        if (q.val < node.val) {
            node = node.left;
            continue;
        }
        if (p.val > node.val) {
            node = node.right;
            continue;
        }
        return node;
    }

    return null;
};

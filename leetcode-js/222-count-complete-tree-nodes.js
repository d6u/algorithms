/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
    var h = height(root);
    return h === 0 ? 0 :
        height(root.right) === h - 1 ? (1 << (h - 1)) + countNodes(root.right) :
            (1 << (h - 2)) + countNodes(root.left);
};

function height(root) {
    return root == null ? 0 : 1 + height(root.left);
}

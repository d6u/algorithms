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
var countNodes = function(root) {
    var h = getHeight(root);
    return h === 0 ?
        0 :
        h - getHeight(root.right) === 1 ?
            Math.pow(2, h - 1) + countNodes(root.right) :
            Math.pow(2, h - 2) + countNodes(root.left);
};

function getHeight(root) {
    return root == null ? 0 : 1 + getHeight(root.left);
}

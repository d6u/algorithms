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
var minDepth = function(root) {
    if (!root) {
        return 0;
    }

    if (!root.left && !root.right) {
        return 1;
    }

    const left = root.left ? minDepth(root.left) : Infinity;
    const right = root.right ? minDepth(root.right) : Infinity;
    const min = Math.min(left, right);

    return 1 + min;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) return false;

    var s = sum - root.val;

    if (!root.left && !root.right) {
        return s === 0 ? true : false;
    }

    return hasPathSum(root.left, s) || hasPathSum(root.right, s);
};

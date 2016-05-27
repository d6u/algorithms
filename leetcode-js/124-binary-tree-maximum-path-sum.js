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
var maxPathSum = function(root) {
    if (!root) {
        return 0;
    }

    const result = {max: -Infinity};
    _maxPathSum(root, result);
    return result.max;
};

function _maxPathSum(root, result) {
    if (!root) {
        return 0;
    }

    const leftSum = _maxPathSum(root.left, result);
    const rightSum = _maxPathSum(root.right, result);

    const current = Math.max(root.val, root.val + leftSum, root.val + rightSum);
    result.max = Math.max(result.max, current, root.val + leftSum + rightSum);

    return current;
}

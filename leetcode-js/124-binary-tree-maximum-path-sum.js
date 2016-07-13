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
    const [max] = _maxPathSum(root, -Infinity);
    return max;
};

function _maxPathSum(root, max) {
    if (!root) {
        return [max, 0];
    }

    let leftSum;
    let rightSum;

    [max, leftSum] = _maxPathSum(root.left, max);
    [max, rightSum] = _maxPathSum(root.right, max);

    const current = Math.max(root.val, root.val + leftSum, root.val + rightSum);
    max = Math.max(max, current, root.val + leftSum + rightSum);

    return [max, current];
}

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
var rob = function(root) {
    const result = robSub(root);
    return Math.max(result[0], result[1]);
};

function robSub(root) {
    if (!root) {
        return [0, 0];
    }
    const leftResult = robSub(root.left);
    const rightResult = robSub(root.right);
    const result = [0, 0];
    result[0] =
        Math.max(leftResult[0], leftResult[1]) +
        Math.max(rightResult[0], rightResult[1]);
    result[1] = root.val + leftResult[0] + rightResult[0];

    return result;
}

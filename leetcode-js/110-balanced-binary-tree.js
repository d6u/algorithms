/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return getBalance(root) !== -1;
};

function getBalance(node) {
    if (!node) {
        return 0;
    }

    const left = getBalance(node.left);

    if (left === -1) {
        return -1;
    }

    const right = getBalance(node.right);

    if (right === -1) {
        return -1;
    }

    if (Math.abs(left - right) > 1) {
        return -1;
    } else {
        return Math.max(left, right) + 1;
    }
}

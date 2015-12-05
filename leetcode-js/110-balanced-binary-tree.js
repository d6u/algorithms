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
    if (!root) {
      return true;
    }

    var x = getBalance(root);

    if (x === -1) {
        return false;
    }

    return true;
};

function getBalance(root) {
    if (!root) {
        return 0;
    }

    var l = getBalance(root.left);

    if (l === -1) {
        return -1;
    }

    var r = getBalance(root.right);

    if (r === -1) {
        return -1;
    }

    if (Math.abs(l - r) > 1) {
        return -1;
    } else {
        return Math.max(l, r) + 1;
    }
}

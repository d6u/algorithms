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
var isSymmetric = function(root) {
    if (!root) return true;
    return isSym(root.left, root.right);
};

function isSym(l, r) {
    if (!l) return !r;
    if (!r) return !l;

    if (l.val != r.val) return false;

    if (!isSym(l.left, r.right)) {
        return false;
    }

    if (!isSym(l.right, r.left)) {
        return false;
    }

    return true;
}

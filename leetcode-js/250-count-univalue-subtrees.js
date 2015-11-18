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
var countUnivalSubtrees = function(root) {
    var count = [0];
    helper(root, count);
    return count[0];
};

function helper(node, count) {
    if (node == null) {
        return true;
    }

    var left = helper(node.left, count);
    var right = helper(node.right, count);

    if (left && right) {
        if (node.left != null && node.val !== node.left.val) {
            return false;
        }
        if (node.right != null && node.val !== node.right.val) {
            return false;
        }
        count[0] += 1;
        return true;
    }

    return false;
}

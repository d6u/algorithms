/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    var a = root.val;
    var child = target < a ? root.left : root.right;
    if (!child) {
        return a;
    }
    var b = closestValue(child, target);
    return Math.abs(a - target) < Math.abs(b - target) ? a : b;
};

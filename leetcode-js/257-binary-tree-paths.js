/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) return [];
    if (!root.left && !root.right) {
        return [root.val.toString()];
    }
    var r = [];
    if (root.left) {
        r = binaryTreePaths(root.left).map((p) => root.val + '->' + p).concat(r);
    }
    if (root.right) {
        r = binaryTreePaths(root.right).map((p) => root.val + '->' + p).concat(r);
    }
    return r;
};

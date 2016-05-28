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
    const result = [];
    _binaryTreePaths(root, '', result);
    return result;
};

function _binaryTreePaths(root, path, result) {
    if (!root) {
        return;
    }

    const current = path === '' ? `${root.val}` : `${path}->${root.val}`;

    if (!root.left && !root.right) {
        result.push(current);
        return;
    }

    if (root.left) {
        _binaryTreePaths(root.left, current, result);
    }

    if (root.right) {
        _binaryTreePaths(root.right, current, result);
    }
}

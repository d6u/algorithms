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
var countNodes = function(root) {
    var depth = 0;
    var node = root;

    while (node) {
        depth += 1;
        node = node.left;
    }

    if (depth === 0) {
        return 0;
    }

    var left = 0;
    var right = (1 << (depth - 1)) - 1;
    var mid;

    while (left <= right) {
        mid = (left + right) >> 1;
        if (getNode(root, mid, depth -1)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return (1 << (depth - 1)) + right;
};

function getNode(root, path, depth) {
    while (depth-- && root) {
        if (path & (1 << depth)) {
            root = root.right;
        } else {
            root = root.left;
        }
    }
    return root;
}

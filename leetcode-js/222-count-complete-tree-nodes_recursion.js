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
    if (!root) {
        return 0;
    }

    var hLeft = 0;
    var hRight = 0;
    var left = root;
    var right = root;

    while (left) {
        hLeft += 1;
        left = left.left;
    }

    while (right) {
        hRight += 1;
        right = right.right;
    }

    if (hLeft === hRight) {
        return Math.pow(2, hLeft) - 1;
    }

    return 1 + countNodes(root.left) + countNodes(root.right);
};

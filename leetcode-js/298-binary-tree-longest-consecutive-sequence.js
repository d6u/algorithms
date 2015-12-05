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
var longestConsecutive = function(root) {
    return search(root, null, 0);
};

function search(root, parent, len) {
    if (!root) return len;

    len = (parent && root.val === parent.val + 1) ? len + 1 : 1;

    return Math.max(
        len,
        search(root.left, root, len),
        search(root.right, root, len));
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    helper(root, null);
};

function helper(root, prev) {
    if (!root) {
        return prev;
    }

    prev = helper(root.right, prev);
    prev = helper(root.left, prev);

    root.right = prev;
    root.left = null;

    return root;
}

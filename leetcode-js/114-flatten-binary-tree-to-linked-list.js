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
    const stack = [];
    let node = root;

    while (node || stack.length) {
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            node.right = node.left;
            node.left = null;
        } else if (stack.length) {
            node.right = stack.pop();
        }
        node = node.right;
    }
};

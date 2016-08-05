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
var isValidBST = function(root) {
    const stack = [];
    let node = root;
    let prev;

    while (node || stack.length) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop();
            if (prev && node.val <= prev.val) {
                return false;
            }
            prev = node;
            node = node.right;
        }
    }

    return true;
};

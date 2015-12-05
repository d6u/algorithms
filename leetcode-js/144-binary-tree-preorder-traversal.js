/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    return Array.from(preorderIterateTree(root));
};

function *preorderIterateTree(root) {
    var stack = [];
    var node = root;
    while (node) {
        if (node.right) {
            stack.push(node.right);
        }
        yield node.val;
        if (node.left) {
            node = node.left;
        } else {
            node = stack.pop();
        }
    }
}

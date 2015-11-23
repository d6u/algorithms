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
var inorderTraversal = function(root) {
    if (!root) return [];

    var r = [];
    var nodes = [];
    var last = root;
    var t;

    while (nodes.length || last) {
        if (last) {
            nodes.push(last);
            last = last.left;
        } else {
            t = nodes.pop();
            r.push(t.val);
            last = t.right;
        }
    }

    return r;
};

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
var preorderTraversal = function(root) {
    if (!root) return [];

    var r = [];
    var nodes = [];
    var l = root;
    var t;

    while (nodes.length || l) {
        if (l) {
            r.push(l.val);
            nodes.push(l);
            l = l.left;
        } else {
            t = nodes.pop();
            l = t.right;
        }
    }

    return r;
};

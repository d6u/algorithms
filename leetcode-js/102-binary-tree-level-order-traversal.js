/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    var results = [];
    var row = [root];
    var rowResults;
    var len;
    var i;
    var node;

    while (row.length) {
        rowResults = [];
        len = row.length;
        for (i = 0; i < len; i++) {
            node = row.shift();
            rowResults.push(node.val);
            if (node.left) row.push(node.left);
            if (node.right) row.push(node.right);
        }
        results.push(rowResults);
    }

    return results;
};

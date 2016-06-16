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
var levelOrderBottom = function(root) {
    if (!root) {
        return [];
    }

    const result = [];
    let row = [root];

    while (row.length) {
        const values = [];
        const rowNext = [];
        let node;

        while ((node = row.shift())) {
            values.push(node.val);
            if (node.left) {
                rowNext.push(node.left);
            }
            if (node.right) {
                rowNext.push(node.right);
            }
        }

        result.unshift(values);
        row = rowNext;
    }

    return result;
};

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
    'use strict';

    if (!root) {
        return [];
    }

    const result = [];
    let row = [root];
    let nextRow = [];
    let rowResult = [];

    while (row.length) {
        const node = row.shift();
        if (node.left) {
            nextRow.push(node.left);
        }
        if (node.right) {
            nextRow.push(node.right);
        }
        rowResult.push(node.val);
        if (!row.length) {
            row = nextRow;
            nextRow = [];
            result.push(rowResult);
            rowResult = [];
        }
    }

    return result;
};

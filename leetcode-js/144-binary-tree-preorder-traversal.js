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
    'use strict';

    if (!root) {
        return [];
    }

    const stack = [];
    let node = root;
    const result = [];

    while (node) {
        if (node.right) {
            stack.push(node.right);
        }
        result.push(node.val);
        if (node.left) {
            node = node.left;
        } else {
            node = stack.pop();
        }
    }

    return result;
};

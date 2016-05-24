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
    'use strict';

    if (!root) {
        return [];
    }

    const stack = [];
    let last = root;
    const result = [];

    while (stack.length || last) {
        if (last) {
            stack.push(last);
            last = last.left;
        } else {
            const temp = stack.pop();
            result.push(temp.val);
            last = temp.right;
        }
    }

    return result;
};

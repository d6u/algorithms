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
var postorderTraversal = function(root) {
    'use strict';

    if (!root) {
        return [];
    }

    const stack = [root];
    let prev;
    const result = [];

    while (stack.length) {
        const curr = stack[stack.length - 1];
        if (prev == null || prev.left === curr || prev.right === curr) {
            if (curr.left) {
                stack.push(curr.left);
            } else if (curr.right) {
                stack.push(curr.right);
            }
        } else if (prev === curr.left && curr.right) {
            stack.push(curr.right);
        } else {
            result.push(curr.val);
            stack.pop();
        }
        prev = curr;
    }

    return result;
};

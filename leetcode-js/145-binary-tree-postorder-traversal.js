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

        // 1. Go down along the left most path while filling up the stack
        if (prev == null || prev.left === curr || prev.right === curr) {
            if (curr.left) {
                stack.push(curr.left);
            } else if (curr.right) {
                stack.push(curr.right);
            }
        } else if (prev === curr.left && curr.right) {
            // 3. Moving up after reaching bottom
            stack.push(curr.right);
        } else {
            // 2. Reaching bottom
            result.push(curr.val);
            stack.pop();
        }
        prev = curr;
    }

    return result;
};

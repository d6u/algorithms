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
var rightSideView = function(root) {
    'use strict';

    if (!root) {
        return [];
    }

    const result = [];
    let queue = [root];

    while (queue.length) {
        const len = queue.length;
        for (let i = 0; i < len; i += 1) {
            const node = queue.shift();
            if (i === 0) {
                result.push(node.val);
            }
            if (node.right) {
                queue.push(node.right);
            }
            if (node.left) {
                queue.push(node.left);
            }
        }
    }

    return result;
};

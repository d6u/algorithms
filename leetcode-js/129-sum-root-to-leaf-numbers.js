/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root, sum) {
    'use strict';

    if (!root) {
        return 0;
    }

    if (sum == null) {
        sum = 0;
    }

    const currentSum = root.val + sum * 10;

    if (!root.left && !root.right) {
        return currentSum;
    }

    let result = 0;

    if (root.left) {
        result += sumNumbers(root.left, currentSum);
    }

    if (root.right) {
        result += sumNumbers(root.right, currentSum);
    }

    return result;
};

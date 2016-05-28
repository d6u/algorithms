/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function(root, target, k) {
    'use strict';

    if (!root) {
        return [];
    }

    const result = [];
    const lessThanStack = [];
    const greaterThanStack = [];

    inorder(root, target, false, lessThanStack);
    inorder(root, target, true, greaterThanStack);

    while (k > 0) {
        k -= 1;
        if (!lessThanStack.length) {
            result.push(greaterThanStack.pop());
        } else if (!greaterThanStack.length) {
            result.push(lessThanStack.pop());
        } else if (Math.abs(lessThanStack[lessThanStack.length - 1] - target) > Math.abs(greaterThanStack[greaterThanStack.length - 1] - target)) {
            result.push(greaterThanStack.pop());
        } else {
            result.push(lessThanStack.pop());
        }
    }

    return result;
};

function inorder(root, target, isLessThan, stack) {
    if (!root) {
        return;
    }

    if (isLessThan) {
        inorder(root.left, target, isLessThan, stack);
        if (root.val > target) {
            return;
        }
        stack.push(root.val);
        inorder(root.right, target, isLessThan, stack);
    } else {
        inorder(root.right, target, isLessThan, stack);
        if (root.val <= target) {
            return;
        }
        stack.push(root.val);
        inorder(root.left, target, isLessThan, stack);
    }
}

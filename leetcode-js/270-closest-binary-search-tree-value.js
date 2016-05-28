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
 * @return {number}
 */
var closestValue = function(root, target) {
    'use strict';

    if (!root) {
        return null;
    }

    if (!root.left && !root.right) {
        return root.val;
    }

    let child;

    if (!root.left) {
        child = root.right;
    } else if (!root.right) {
        child = root.left;
    } else {
        child = root.val < target ? root.right : root.left;
    }

    const val = closestValue(child, target);

    return Math.abs(root.val - target) > Math.abs(val - target) ? val : root.val;
};

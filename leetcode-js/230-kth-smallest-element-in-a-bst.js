/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    return _kthSmallest(root, {n: 0}, k);
};

function _kthSmallest(root, counter, k) {
    'use strict';

    if (root.left) {
        const result = _kthSmallest(root.left, counter, k);
        if (result != null) {
            return result;
        }
    }

    counter.n += 1;

    if (counter.n === k) {
        return root.val;
    }

    if (root.right) {
        const result = _kthSmallest(root.right, counter, k);
        if (result != null) {
            return result;
        }
    }
}

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    'use strict';

    if (!root) {
        return;
    }

    let aboveLeftMost = root;
    let aboveCurrent;
    let leftMost;
    let current;

    while (aboveLeftMost) {
        aboveCurrent = aboveLeftMost;
        while (aboveCurrent) {
            if (aboveCurrent.left) {
                if (!leftMost) {
                    current = leftMost = aboveCurrent.left;
                } else {
                    current.next = aboveCurrent.left;
                    current = current.next;
                }
            }

            if (aboveCurrent.right) {
                if (!leftMost) {
                    current = leftMost = aboveCurrent.right;
                } else {
                    current.next = aboveCurrent.right;
                    current = current.next;
                }
            }

            aboveCurrent = aboveCurrent.next;
        }
        aboveLeftMost = leftMost;
        leftMost = null;
    }
};

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
    if (!root) return;

    var aboveLeftMost = root;
    var aboveCurrent;
    var leftMost;
    var current;

    while (aboveLeftMost) {
        aboveCurrent = aboveLeftMost;

        while (aboveCurrent) {
            if (aboveCurrent.left) {
                if (!leftMost) {
                    leftMost = aboveCurrent.left;
                    current = aboveCurrent.left;
                } else {
                    current.next = aboveCurrent.left;
                    current = current.next;
                }
            }

            if (aboveCurrent.right) {
                if (!leftMost) {
                    leftMost = aboveCurrent.right;
                    current = aboveCurrent.right;
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

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

  var aboveHead = root;
  var aboveCurrent;
  var head;
  var current;

  while (aboveHead) {
    aboveCurrent = aboveHead;

    while (aboveCurrent) {

      if (aboveCurrent.left) {
        if (head == null) {
          head = aboveCurrent.left;
          current = aboveCurrent.left;
        } else {
          current.next = aboveCurrent.left;
          current = current.next;
        }
      }

      if (aboveCurrent.right) {
        if (head == null) {
          head = aboveCurrent.right;
          current = aboveCurrent.right;
        } else {
          current.next = aboveCurrent.right;
          current = current.next;
        }
      }

      aboveCurrent = aboveCurrent.next;
    }

    aboveHead = head;
    head = null;
  }
};

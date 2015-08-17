/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return [];

  var current = [root];
  var next;
  var r = [];
  var rc;
  var i;
  var fromLeft = true;
  var node;

  while (current.length) {
    next = [];
    rc = [];

    for (i = 0; i < current.length; i++) {
      node = current[i];

      if (fromLeft) {
        node.left && next.unshift(node.left);
        node.right && next.unshift(node.right);
      } else {
        node.right && next.unshift(node.right);
        node.left && next.unshift(node.left);
      }

      rc.push(node.val);
    }

    r.push(rc);
    current = next;
    fromLeft = !fromLeft;
  }

  return r;
};

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
  var r = [];
  var l;
  var i;
  var top;
  var queue;

  if (!root) return r;

  queue = [];
  queue.push(root);

  while (queue.length) {
    l = queue.length;
    for (i = 0; i < l; i++) {
      top = queue.shift();
      if (i === 0) {
        r.push(top.val);
      }
      if (top.right) {
        queue.push(top.right);
      }
      if (top.left) {
        queue.push(top.left)
      }
    }
  }

  return r;
};

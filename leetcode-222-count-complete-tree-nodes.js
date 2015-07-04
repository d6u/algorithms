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
var countNodes = function(root) {
  if (!root) return 0;
  var countLeft = 1;
  var countRight = 1;
  var left = root;
  var right = root;
  while (left.left) {
    countLeft += 1;
    left = left.left;
  }
  while (right.right) {
    countRight += 1;
    right = right.right;
  }
  if (countRight === countLeft) {
    return Math.pow(2, countLeft) - 1;
  }
  else {
    return countNodes(root.right) + countNodes(root.left) + 1;
  }
};

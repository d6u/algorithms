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
var sumNumbers = function (root, sum) {
  if (root == null) return 0;
  if (sum == null) sum = 0;

  var curSum = root.val + sum * 10;

  if (!root.left && !root.right) return curSum;

  var r = 0;

  if (root.left) r += sumNumbers(root.left, curSum);
  if (root.right) r += sumNumbers(root.right, curSum);

  return r;
};

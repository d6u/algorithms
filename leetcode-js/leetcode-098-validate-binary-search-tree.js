/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  return _isValidBST(root, null, null);
};

function _isValidBST(node, min, max) {
  if (node == null) {
    return true;
  }

  if (max !== null && node.val >= max) {
    return false;
  }

  if (min !== null && node.val <= min) {
    return false;
  }

  return _isValidBST(node.left, min, node.val) && _isValidBST(node.right, node.val, max);
}

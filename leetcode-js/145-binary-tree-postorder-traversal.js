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
var postorderTraversal = function(root) {
  var vals = [];
  _postorderTraversal(root, vals);
  return vals;
};

function _postorderTraversal(node, vals) {
  if (!node) return;
  _postorderTraversal(node.left, vals);
  _postorderTraversal(node.right, vals);
  vals.push(node.val);
}

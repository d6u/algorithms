function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length) return null;
  return _buildTree(preorder, 0, preorder.length, inorder, 0, inorder.length);
};

function _buildTree(preorder, prStart, prEnd, inorder, inStart, inEnd) {
  if (prStart === prEnd) return null;
  var rootVal = preorder[prStart];
  var r = new TreeNode(rootVal);
  var index = inorder.indexOf(rootVal, inStart);
  r.left = _buildTree(preorder, prStart + 1, index - inStart + prStart + 1, inorder, inStart, index);
  r.right = _buildTree(preorder, index - inStart + prStart + 1, prEnd, inorder, index + 1, inEnd);
  return r;
}

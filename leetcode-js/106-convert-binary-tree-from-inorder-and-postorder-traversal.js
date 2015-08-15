function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param  {number[]} inorder
 * @param  {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (!inorder.length) return null;
  return _buildTree(inorder, 0, inorder.length, postorder, 0, postorder.length);
};

function _buildTree(inorder, inStart, inEnd, postorder, poStart, poEnd) {
  if (inStart === inEnd) return null;
  var rootVal = postorder[poEnd - 1];
  var r = new TreeNode(rootVal);
  var index = inorder.indexOf(rootVal, inStart);
  r.left = _buildTree(inorder, inStart, index, postorder, poStart, index - inStart + poStart);
  r.right = _buildTree(inorder, index + 1, inEnd, postorder, index - inStart + poStart, poEnd - 1);
  return r;
}

console.log(buildTree([1,3,2], [3,2,1]));

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param  {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  return createTrees(1, n);
};

function createTrees(min, max) {
  if (min > max) {
    return [null];
  }
  var result = [];
  var i;
  var node;
  var leftNodes;
  var rightNodes;
  for (i = min; i <= max; i += 1) {
    leftNodes = createTrees(min, i - 1);
    rightNodes = createTrees(i + 1, max);
    for (l = 0; l < leftNodes.length; l += 1) {
      for (r = 0; r < rightNodes.length; r += 1) {
        node = new TreeNode(i);
        node.left = leftNodes[l];
        node.right = rightNodes[r];
        result.push(node);
      }
    }
  }
  return result;
}

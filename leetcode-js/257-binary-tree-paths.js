/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param  {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) return [];

  var r = [];
  findPath(root, [], r);
  return r;
};

function findPath(node, nodes, result) {
  if (node.left) {
    findPath(node.left, nodes.concat([node.val]), result);
  }

  if (node.right) {
    findPath(node.right, nodes.concat([node.val]), result);
  }

  if (!node.left && !node.right) {
    result.push(nodes.concat([node.val]).join('->'));
  }
}

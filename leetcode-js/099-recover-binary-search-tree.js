/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  var nodes = [];
  var vals = [];
  inOrderTravel(root, nodes, vals);
  vals.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0; i < nodes.length; i++) {
    nodes[i].val = vals[i];
  }
};

function inOrderTravel(node, nodes, vals) {
  if (!node) return;

  inOrderTravel(node.left, nodes, vals);
  nodes.push(node);
  vals.push(Number(node.val));
  inOrderTravel(node.right, nodes, vals);
}

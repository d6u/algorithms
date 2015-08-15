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
var maxPathSum = function(root) {
  var re = {max: -Infinity};
  calcMax(root, re);
  return re.max;
};

function calcMax(node, re) {
  if (!node) return 0;

  var l = calcMax(node.left, re);
  var r = calcMax(node.right, re);

  var cur = Math.max(node.val, node.val + l, node.val + r);
  re.max = Math.max(re.max, cur, node.val + l + r);
  return cur;
}

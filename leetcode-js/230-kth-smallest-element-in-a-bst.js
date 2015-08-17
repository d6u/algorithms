/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param  {TreeNode} root
 * @param  {number}   k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  return findK(root, {n: 0}, k);
};

function findK(node, counter, k) {
  var r;

  if (node.left && (r = findK(node.left, counter, k)) != null) {
    return r;
  }

  counter.n++;
  if (counter.n === k) {
    return node.val;
  }

  if (node.right && (r = findK(node.right, counter, k)) != null) {
    return r;
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (!root) return [];
  var r = [];
  findSum(root, sum, [], r);
  return r;
};

function findSum(node, sum, sol, result) {
  if (node.left) {
    findSum(node.left, sum - node.val, sol.concat([node.val]), result);
  }

  if (node.right) {
    findSum(node.right, sum - node.val, sol.concat([node.val]), result);
  }

  if (!node.left && !node.right && sum === node.val) {
    result.push(sol.concat([node.val]));
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums, p1, p2) {
  if (!nums.length) return null;
  if (p1 == null) p1 = 0;
  if (p2 == null) p2 = nums.length - 1;
  if (p1 > p2) return null;

  var m = (p2 + p1) / 2 | 0;
  var t = new TreeNode(nums[m]);
  t.left = sortedArrayToBST(nums, p1, m - 1);
  t.right = sortedArrayToBST(nums, m + 1, p2);
  return t;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function(root, target, k) {
    var res = [];
    var s1 = [];
    var s2 = [];

    inorder(root, target, false, s1);
    inorder(root, target, true, s2);

    while (k-- > 0) {
        if (s1.length === 0) {
            res.push(s2.pop());
        } else if (s2.length === 0) {
            res.push(s1.pop());
        } else if (Math.abs(s1[s1.length-1] - target) < Math.abs(s2[s2.length-1] - target)) {
            res.push(s1.pop());
        } else {
            res.push(s2.pop());
        }
    }

    return res;
};

function inorder(root, target, reverse, stack) {
    if (root == null) {
        return;
    }
    inorder(reverse ? root.right : root.left, target, reverse, stack);
    if ((reverse && root.val <= target) || (!reverse && root.val > target)) return;
    stack.push(root.val);
    inorder(reverse ? root.left: root.right, target, reverse, stack);
}

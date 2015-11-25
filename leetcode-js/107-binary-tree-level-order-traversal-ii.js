/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) return [];
    var r = [];
    var t = [root];
    var t2;
    var r1;
    var c;
    while (t.length) {
        r1 = [];
        t2 = [];
        while ((c = t.shift())) {
            r1.push(c.val);
            if (c.left) t2.push(c.left);
            if (c.right) t2.push(c.right);
        }
        r.unshift(r1);
        t = t2;
    }

    return r;
};

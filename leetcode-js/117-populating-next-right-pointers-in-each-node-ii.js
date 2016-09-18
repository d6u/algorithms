/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (!root) {
        return;
    }

    let tl = root;

    while (tl) {
        let tc = tl;
        let l = null;
        let c = null;
        while (tc) {
            if (tc.left) {
                if (!l) {
                    l = tc.left;
                    c = l;
                } else {
                    c.next = tc.left;
                    c = c.next;
                }
            }
            if (tc.right) {
                if (!l) {
                    l = tc.right;
                    c = l;
                } else {
                    c.next = tc.right;
                    c = c.next;
                }
            }
            tc = tc.next;
        }
        tl = l;
    }
};

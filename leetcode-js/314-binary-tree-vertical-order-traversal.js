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
var verticalOrder = function(root) {
    if (!root) {
        return [];
    }

    const map = new Map();
    const queue = [root];
    const columns = [0];

    let min = 0;
    let max = 0;

    while (queue.length) {
        const node = queue.shift();
        const col = columns.shift();

        if (!map.has(col)) {
            map.set(col, []);
        }

        map.get(col).push(node.val);

        if (node.left) {
            queue.push(node.left);
            columns.push(col - 1);
            if (min > col - 1) {
                min = col - 1;
            }
        }

        if (node.right) {
            queue.push(node.right);
            columns.push(col + 1);
            if (max < col + 1) {
                max = col + 1;
            }
        }
    }

    const res = [];

    for (let i = min; i <= max; i++) {
        res.push(map.get(i));
    }

    return res;
};

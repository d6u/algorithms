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
    const queue = [];
    const cols = [];

    queue.push(root);
    cols.push(0);

    let min = 0;
    let max = 0;

    while (queue.length) {
        const node = queue.shift();
        const col = cols.shift();
        if (!map.has(col)) {
            map.set(col, []);
        }
        map.get(col).push(node.val);
        if (node.left) {
            queue.push(node.left);
            cols.push(col - 1);
            if (col <= min) {
                min = col - 1;
            }
        }
        if (node.right) {
            queue.push(node.right);
            cols.push(col + 1);
            if (col >= max) {
                max = col + 1;
            }
        }
    }

    const result = [];

    for (let i = min; i <= max; i += 1) {
        result.push(map.get(i));
    }

    return  result;
};

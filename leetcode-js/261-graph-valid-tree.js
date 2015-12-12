/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
    var nums = Array(n);

    for (var i = 0; i < nums.length; i++) {
        nums[i] = -1;
    }

    for (i = 0; i < edges.length; i++) {
        var x = find(nums, edges[i][0]);
        var y = find(nums, edges[i][1]);

        if (x === y) {
            return false;
        }

        nums[x] = y;
    }

    return edges.length === n - 1;
};

function find(nums, i) {
    if (nums[i] === -1) {
        return i;
    }
    return find(nums, nums[i]);
}

console.log(validTree(5, [[0, 1], [1, 2], [2, 3], [3, 4]]))

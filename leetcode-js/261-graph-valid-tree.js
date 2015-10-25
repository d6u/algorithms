/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
    if (edges.length !== n - 1) return false;

    var graph = new Map();

    for (var i = 0; i < n; i++) {
        graph.set(i, new Set());
    }

    for (var edge of edges) {
        graph.get(edge[0]).add(edge[1]);
        graph.get(edge[1]).add(edge[0]);
    }

    visit(0, graph);

    return graph.size === 0;
};

var visit = function (node, graph) {
    var vals = graph.get(node);

    if (vals != null) {
        graph.delete(node);
        for (var val of vals) {
            visit(val, graph);
        }
    }
};

console.log(validTree(5, [[0, 1], [1, 2], [2, 3], [1, 3]]))

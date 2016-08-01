/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    if (n !== edges.length + 1) {
        return false;
    }

    const graph = [];

    for (let i = 0; i < n; i += 1) {
        graph[i] = -1;
    }

    for (const edge of edges) {
        const a = find(graph, edge[0]);
        const b = find(graph, edge[1]);

        // A tree is a graph that
        // any two nodes are connected through only one path
        if (a === b) {
            return false;
        }

        graph[a] = b;
    }

    return true;
};

function find(graph, node) {
    if (graph[node] === -1) {
        return node;
    }
    return find(graph, graph[node]);
}

console.log(validTree(5, [[0, 1], [1, 2], [2, 3], [3, 4]]))

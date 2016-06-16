/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    const roots = [];

    for (let i = 0; i < n; i += 1) {
        roots[i] = i;
    }

    for (const [node1, node2] of edges) {
        const root1 = find(roots, node1);
        const root2 = find(roots, node2);
        if (root1 !== root2) {
            roots[root1] = root2;
            n -= 1;
        }
    }

    return n;
};

function find(roots, node) {
    while (roots[node] !== node) {
        roots[node] = roots[roots[node]];
        node = roots[node];
    }
    return node;
}

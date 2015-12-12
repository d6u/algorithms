/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
    var map = new Map();
    return clone(graph, map);
};

function clone(node, map) {
    if (!node) {
        return null;
    }

    if (map.has(node.label)) {
        return map.get(node.label);
    }

    var cloneNode = new UndirectedGraphNode(node.label);

    map.set(cloneNode.label, cloneNode);

    for (var neighbor of node.neighbors) {
        cloneNode.neighbors.push(clone(neighbor, map));
    }

    return cloneNode;
}

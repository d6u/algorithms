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
    if (!graph) return null;

    var newHead = new UndirectedGraphNode(graph.label);
    var queue = [graph];
    var map = new Map();

    map.set(graph, newHead);

    var node;
    var i;
    var neighbor;

    while (queue.length) {
        node = queue.pop();
        clonedNode = map.get(node);

        for (i = 0; i < node.neighbors.length; i++) {
            neighbor = node.neighbors[i];
            if (!map.has(neighbor)) {
                queue.push(neighbor);
                map.set(neighbor, new UndirectedGraphNode(neighbor.label));
            }
            clonedNode.neighbors.push(map.get(neighbor));
        }
    }

    return newHead;
};

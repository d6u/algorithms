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
    'use strict';

    if (!graph) {
        return null;
    }

    const newHead = new UndirectedGraphNode(graph.label);
    const map = new Map();
    map.set(graph, newHead);
    const queue = [graph];

    while (queue.length) {
        const node = queue.pop();
        const clonedNode = map.get(node);

        for (let i = 0; i < node.neighbors.length; i += 1) {
            const neighbor = node.neighbors[i];
            let clonedNeighbor = map.get(neighbor);
            if (!clonedNeighbor) {
                clonedNeighbor = new UndirectedGraphNode(neighbor.label);
                map.set(neighbor, clonedNeighbor);
                queue.push(neighbor);
            }
            clonedNode.neighbors.push(clonedNeighbor);
        }
    }

    return newHead;
};

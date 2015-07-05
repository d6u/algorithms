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
  var queue = [];
  var map = new Map();
  var newHead = new UndirectedGraphNode(graph.label);
  var node;
  var clonedNode;
  var neighbor;
  var clonedNeighbor;
  var i;

  queue.push(graph);
  map.set(graph, newHead);

  while (queue.length) {
    node = queue.shift();
    clonedNode = map.get(node);
    for (i = 0; i < node.neighbors.length; i += 1) {
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

/**
 * Definition for undirected graph.
 * class UndirectedGraphNode {
 *     int label;
 *     List<UndirectedGraphNode> neighbors;
 *     UndirectedGraphNode(int x) { label = x; neighbors = new ArrayList<UndirectedGraphNode>(); }
 * };
 */
public class Solution {
    public UndirectedGraphNode cloneGraph(UndirectedGraphNode node) {
        if (node == null) {
            return null;
        }

        Map<Integer, UndirectedGraphNode> map = new HashMap<>();

        UndirectedGraphNode newHead = new UndirectedGraphNode(node.label);
        map.put(node.label, newHead);

        Queue<UndirectedGraphNode> queue = new LinkedList<>();
        queue.add(node);

        while (queue.peek() != null) {
            UndirectedGraphNode n = queue.poll();
            UndirectedGraphNode clone = map.get(n.label);

            for (UndirectedGraphNode neighbor : n.neighbors) {
                if (map.containsKey(neighbor.label)) {
                    clone.neighbors.add(map.get(neighbor.label));
                } else {
                    UndirectedGraphNode clonedNeighbor = new UndirectedGraphNode(neighbor.label);
                    clone.neighbors.add(clonedNeighbor);
                    map.put(neighbor.label, clonedNeighbor);
                    queue.add(neighbor);
                }
            }
        }

        return newHead;
    }
}

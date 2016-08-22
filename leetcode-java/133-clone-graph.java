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
        Map<Integer, UndirectedGraphNode> map = new HashMap<>();

        return dfs(map, node);
    }

    UndirectedGraphNode dfs(Map<Integer, UndirectedGraphNode> map, UndirectedGraphNode node) {
        if (node == null) {
            return null;
        }

        if (map.get(node.label) != null) {
            return map.get(node.label);
        }

        UndirectedGraphNode clone = new UndirectedGraphNode(node.label);

        map.put(node.label, clone);

        for (UndirectedGraphNode neighbor : node.neighbors) {
            clone.neighbors.add(dfs(map, neighbor));
        }

        return clone;
    }
}

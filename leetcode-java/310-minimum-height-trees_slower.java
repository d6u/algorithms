public class Solution {
    public List<Integer> findMinHeightTrees(int n, int[][] edges) {
        if (n == 1) {
            return Collections.singletonList(0);
        }

        Set<Integer>[] neighbors = new Set[n];

        for (int i = 0; i < n; i++) {
            neighbors[i] = new HashSet<>();
        }

        for (int[] edge : edges) {
            neighbors[edge[0]].add(edge[1]);
            neighbors[edge[1]].add(edge[0]);
        }

        List<Integer> leaves = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            if (neighbors[i].size() == 1) {
                leaves.add(i);
            }
        }

        while (n > 2) {
            n -= leaves.size();
            List<Integer> newLeaves = new ArrayList<>();
            for (int leaf : leaves) {
                int target = neighbors[leaf].iterator().next();
                neighbors[target].remove(leaf);
                if (neighbors[target].size() == 1) {
                    newLeaves.add(target);
                }
            }
            leaves = newLeaves;
        }

        return leaves;
    }
}

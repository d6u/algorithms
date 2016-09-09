public class Solution {

    class UnionFind2D {
        private int m;
        private int n;
        private int[] ids;
        private int[] weights;
        private int count = 0;

        UnionFind2D(int m, int n) {
            this.m = m;
            this.n = n;
            ids = new int[m * n + 1];
            weights = new int[m * n + 1];
        }

        int add(int i, int j) {
            int id = index(i, j);
            ids[id] = id;
            weights[id] = 1;
            count += 1;
            return id;
        }

        boolean exists(int i, int j) {
            return ids[index(i, j)] > 0;
        }

        int index(int i, int j) {
            return i * n + j + 1;
        }

        boolean find(int a, int b) {
            return root(a) == root(b);
        }

        void union(int a, int b) {
            int rootA = root(a);
            int rootB = root(b);
            if (weights[rootA] < weights[rootB]) {
                ids[rootA] = rootB;
                weights[rootB] += weights[rootA];
            } else {
                ids[rootB] = rootA;
                weights[rootA] += weights[rootB];
            }
            count -= 1;
        }

        private int root(int id) {
            while (ids[id] != id) {
                ids[id] = ids[ids[id]];
                id = ids[id];
            }
            return id;
        }
    }

    public List<Integer> numIslands2(int m, int n, int[][] positions) {
        UnionFind2D uf = new UnionFind2D(m, n);
        List<Integer> res = new LinkedList<>();

        for (int[] pos : positions) {
            int i = pos[0];
            int j = pos[1];
            int id1 = uf.add(i, j);

            if (i > 0 && uf.exists(i - 1, j)) {
                int id2 = uf.index(i - 1, j);
                if (!uf.find(id1, id2)) {
                    uf.union(id1, id2);
                }
            }

            if (i < m - 1 && uf.exists(i + 1, j)) {
                int id2 = uf.index(i + 1, j);
                if (!uf.find(id1, id2)) {
                    uf.union(id1, id2);
                }
            }

            if (j > 0 && uf.exists(i, j - 1)) {
                int id2 = uf.index(i, j - 1);
                if (!uf.find(id1, id2)) {
                    uf.union(id1, id2);
                }
            }

            if (j < n - 1 && uf.exists(i, j + 1)) {
                int id2 = uf.index(i, j + 1);
                if (!uf.find(id1, id2)) {
                    uf.union(id1, id2);
                }
            }

            res.add(uf.count);
        }

        return res;
    }
}

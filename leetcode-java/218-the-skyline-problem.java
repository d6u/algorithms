public class Solution {
    public List<int[]> getSkyline(int[][] buildings) {
        List<int[]> changes = new LinkedList<>();

        for (int[] building : buildings) {
            int[] change1 = {building[0], -building[2]};
            int[] change2 = {building[1], building[2]};
            changes.add(change1);
            changes.add(change2);
        }

        Collections.sort(changes, new Comparator<int[]>() {
            public int compare(int[] a, int[] b) {
                if (a[0] != b[0]) {
                    return a[0] - b[0];
                } else {
                    return a[1] - b[1];
                }
            }
        });

        List<int[]> res = new LinkedList<>();
        PriorityQueue<Integer> pq = new PriorityQueue<>(new Comparator<Integer>() {
            public int compare(Integer a, Integer b) {
                return -Integer.compare(a, b);
            }
        });
        pq.offer(0);
        int prev = 0;

        for (int[] change : changes) {
            if (change[1] < 0) {
                pq.offer(-change[1]);
            } else {
                pq.remove(change[1]);
            }
            int curr = pq.peek();
            if (prev != curr) {
                int[] r = {change[0], curr};
                res.add(r);
                prev = curr;
            }
        }

        return res;
    }
}

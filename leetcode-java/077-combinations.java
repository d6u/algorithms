public class Solution {
    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> res = new ArrayList<>();
        dfs(res, k, 1, n - k + 1, new ArrayList<>());
        return res;
    }

    void dfs(List<List<Integer>> res, int k, int lower, int upper, List<Integer> cur) {
        if (k == 0) {
            res.add(new ArrayList<>(cur));
            return;
        }

        for (int i = lower; i <= upper; i++) {
            cur.add(i);
            dfs(res, k - 1, i + 1, upper + 1, cur);
            cur.remove(cur.size() - 1);
        }
    }
}

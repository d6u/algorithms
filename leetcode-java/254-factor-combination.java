public class Solution {
    public List<List<Integer>> getFactors(int n) {
        if (n <= 3) {
            return new ArrayList<>();
        }

        List<List<Integer>> res = new ArrayList<>();
        helper(res, n, -1, new ArrayList<>());
        return res;
    }

    void helper(List<List<Integer>> res, int n, int lower, List<Integer> cur) {
        if (lower != -1) {
            cur.add(n);
            res.add(new ArrayList<>(cur));
            cur.remove(cur.size() - 1);
        }

        int upper = (int) Math.sqrt(n);

        for (int i = Math.max(2, lower); i <= upper; i++) {
            if (n % i == 0) {
                cur.add(i);
                helper(res, n / i, i, cur);
                cur.remove(cur.size() - 1);
            }
        }
    }
}

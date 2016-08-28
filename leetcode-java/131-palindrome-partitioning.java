public class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> res = new ArrayList<>();
        dfs(s, res, new ArrayList<String>(), 0);
        return res;
    }

    void dfs(String s, List<List<String>> res, List<String> cur, int index) {
        if (index == s.length()) {
            res.add(new ArrayList<>(cur));
            return;
        }

        for (int i = index; i < s.length(); i++) {
            if (isPal(s, index, i)) {
                cur.add(s.substring(index, i + 1));
                dfs(s, res, cur, i + 1);
                cur.remove(cur.size() - 1);
            }
        }
    }

    boolean isPal(String s, int left, int right) {
        while (left < right) {
            if (s.charAt(left) == s.charAt(right)) {
                left++;
                right--;
            } else {
                return false;
            }
        }

        return true;
    }
}

public class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> res = new ArrayList<String>();
        backtrace(0, 0, n, "", res);
        return res;
    }

    public void backtrace(int open, int close, int n, String cur, List<String> res) {
        if (cur.length() == n * 2) {
            res.add(cur);
            return;
        }

        if (open < n) {
            backtrace(open + 1, close, n, cur + '(', res);
        }
        if (open > close) {
            backtrace(open, close + 1, n, cur + ')', res);
        }
    }
}

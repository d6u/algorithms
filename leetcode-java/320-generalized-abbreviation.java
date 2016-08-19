public class Solution {
    public List<String> generateAbbreviations(String word) {
        List<String> res = new ArrayList<String>();
        solve(word, 0, 0, "", res);
        return res;
    }

    public void solve(String word, int pos, int count, String current, List<String> res) {
        if (pos == word.length()) {
            if (count > 0) {
                current += count;
            }
            res.add(current);
        } else {
            solve(word, pos + 1, count + 1, current, res);
            solve(word, pos + 1, 0, current + (count > 0 ? count : "") + word.charAt(pos), res);
        }
    }
}

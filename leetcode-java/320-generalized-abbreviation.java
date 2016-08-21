public class Solution {
    public List<String> generateAbbreviations(String word) {
        List<String> res = new ArrayList<String>();
        helper(res, word, "", 0, 0);
        return res;
    }

    void helper(List<String> res, String word, String cur, int pos, int count) {
        if (pos == word.length()) {
            if (count > 0) {
                cur += count;
            }
            res.add(cur);
        } else {
            helper(res, word, cur + (count > 0 ? count : "") + word.charAt(pos), pos + 1, 0);
            helper(res, word, cur, pos + 1, count + 1);
        }
    }
}

public class Solution {
    public List<String> letterCombinations(String digits) {
        LinkedList<String> res = new LinkedList<>();

        if (digits.length() == 0) {
            return res;
        }

        String[] mapping = new String[] {"0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};

        res.add("");

        for (int i = 0; i < digits.length(); i++) {
            int n = Character.getNumericValue(digits.charAt(i));
            char[] chars = mapping[n].toCharArray();

            while (res.peek().length() == i) {
                String str = res.poll();

                for (char c : chars) {
                    res.offer(str + c);
                }
            }
        }

        return res;
    }
}

public class Solution {
    public List<String> generatePalindromes(String s) {
        List<String> res = new ArrayList<>();
        Map<Character, Integer> charCounts = new HashMap<>();
        int odd = 0;

        for (char c : s.toCharArray()) {
            charCounts.put(c, charCounts.getOrDefault(c, 0) + 1);
            odd += charCounts.get(c) % 2 == 0 ? -1 : 1;
        }

        if (odd > 1) {
            return res;
        }

        List<Character> charList = new ArrayList<>();
        String mid = "";

        for (Map.Entry<Character, Integer> entry : charCounts.entrySet()) {
            char key = entry.getKey();
            int count = entry.getValue();

            if (count % 2 == 1) {
                mid = Character.toString(key);
            }

            for (int i = 0; i < count / 2; i++) {
                charList.add(key);
            }
        }

        helper(res, charList, mid, new boolean[charList.size()], new StringBuilder());

        return res;
    }

    void helper(List<String> res, List<Character> charList, String mid, boolean[] used, StringBuilder sb) {
        if (sb.length() == charList.size()) {
            res.add(sb.toString() + mid + sb.reverse().toString());
            sb.reverse();
            return;
        }

        for (int i = 0; i < charList.size(); i++) {
            if (i > 0 && charList.get(i) == charList.get(i - 1) && !used[i - 1]) {
                continue;
            }

            if (!used[i]) {
                used[i] = true;
                sb.append(charList.get(i));

                helper(res, charList, mid, used, sb);

                sb.deleteCharAt(sb.length() - 1);
                used[i] = false;
            }
        }
    }
}

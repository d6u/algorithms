public class Solution {
    public boolean canWin(String s) {
        int curLen = 0;
        int maxLen = 0;
        List<Integer> boardInitState = new ArrayList<Integer>();
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '+') {
                curLen++;
            }
            if (i + 1 == s.length() || s.charAt(i) == '-') {
                if (curLen >= 2) {
                    boardInitState.add(curLen);
                }
                maxLen = Math.max(maxLen, curLen);
                curLen = 0;
            }
        }
        int[] g = new int[maxLen + 1];
        for (int len = 2; len <= maxLen; len++) {
            Set<Integer> gsub = new HashSet<Integer>();
            for (int lenFirstGame = 0; lenFirstGame < len / 2; lenFirstGame++) {
                int lenSecondGame = len - lenFirstGame - 2;
                gsub.add(g[lenFirstGame] ^ g[lenSecondGame]);
            }
            g[len] = firstMissingNumber(gsub);
        }
        int gFinal = 0;
        for (int x : boardInitState) {
            gFinal ^= g[x];
        }
        return gFinal != 0;
    }

    int firstMissingNumber(Set<Integer> lut) {
        int m = lut.size();
        for (int i = 0; i < m; ++i) {
            if (!lut.contains(i)) {
                return i;
            }
        }
        return m;
    }
}

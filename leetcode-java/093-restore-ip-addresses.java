public class Solution {
    public List<String> restoreIpAddresses(String s) {
        int len = s.length();

        List<String> res = new ArrayList<>();

        for (int i = 1; i < 4; i++) {
            for (int j = i + 1; j < i + 4 && j < len; j++) {
                for (int k = j + 1; k < j + 4 && k < len; k++) {
                    String s1 = s.substring(0, i);
                    String s2 = s.substring(i, j);
                    String s3 = s.substring(j, k);
                    String s4 = s.substring(k);

                    if (isValid(s1) && isValid(s2) && isValid(s3) && isValid(s4)) {
                        res.add(s1 + "." + s2 + "." + s3 + "." + s4);
                    }
                }
            }
        }

        return res;
    }

    boolean isValid(String s) {
        return s.length() <= 3 && (s.length() == 1 || s.charAt(0) != '0') && Integer.parseInt(s) <= 255;
    }
}

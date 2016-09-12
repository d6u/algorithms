public class Solution {
    public List<String> addOperators(String num, int target) {
        List<String> res = new LinkedList<>();
        helper(num, target, 0, 0, 0, new StringBuilder(), res);
        return res;
    }

    private void helper(String num, int target, int pos, long evaluated, long last, StringBuilder sb, List<String> res) {
        if (pos == num.length()) {
            if (evaluated == target) {
                res.add(sb.toString());
            }
            return;
        }

        for (int i = pos; i < num.length(); i++) {
            if (i > pos && num.charAt(pos) == '0') {
                break;
            }
            long n = Long.parseLong(num.substring(pos, i + 1));
            int len = sb.length();
            if (pos == 0) {
                helper(num, target, i + 1, n, n, sb.append(n), res);
                sb.setLength(len);
            } else {
                helper(num, target, i + 1, evaluated + n, n, sb.append('+').append(n), res);
                sb.setLength(len);

                helper(num, target, i + 1, evaluated - n, -n, sb.append('-').append(n), res);
                sb.setLength(len);

                helper(num, target, i + 1, (evaluated - last) + (last * n), last * n, sb.append('*').append(n), res);
                sb.setLength(len);
            }
        }
    }
}

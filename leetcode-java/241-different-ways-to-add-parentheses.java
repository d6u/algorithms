public class Solution {
    public List<Integer> diffWaysToCompute(String input) {
        List<Integer> res = new ArrayList<Integer>();

        for (int i = 1; i < input.length() - 1; i++) {
            char c = input.charAt(i);
            if (c == '+' || c == '-' || c == '*') {
                List<Integer> leftRes = diffWaysToCompute(input.substring(0, i));
                List<Integer> rightRes = diffWaysToCompute(input.substring(i + 1));
                for (Integer left : leftRes) {
                    for (Integer right : rightRes) {
                        switch (c) {
                            case '+':
                                res.add(left + right);
                                break;
                            case '-':
                                res.add(left - right);
                                break;
                            case '*':
                                res.add(left * right);
                                break;
                        }
                    }
                }
            }
        }

        if (res.size() == 0) {
            res.add(Integer.valueOf(input));
        }

        return res;
    }
}

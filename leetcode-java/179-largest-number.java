public class Solution {
    public String largestNumber(int[] nums) {
        if (nums.length == 0) {
            return "";
        }

        String[] strs = new String[nums.length];

        for (int i = 0; i < nums.length; i++) {
            strs[i] = String.valueOf(nums[i]);
        }

        Comparator<String> comp = new Comparator<String>() {
            @Override
            public int compare(String a, String b) {
                String s1 = a + b;
                String s2 = b + a;
                return s2.compareTo(s1);
            }
        };

        Arrays.sort(strs, comp);

        if (strs[0].charAt(0) == '0') {
            return "0";
        }

        StringBuilder builder = new StringBuilder();

        for (String s : strs) {
            builder.append(s);
        }

        return builder.toString();
    }
}

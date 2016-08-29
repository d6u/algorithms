public class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int start = gas.length - 1;
        int end = 0;
        int sum = gas[start] - cost[start];

        while (start > end) {
            if (sum < 0) {
                start -= 1;
                sum += gas[start] - cost[start];
            } else {
                sum += gas[end] - cost[end];
                end += 1;
            }
        }

        return sum >= 0 ? start : -1;
    }
}

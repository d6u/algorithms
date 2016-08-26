/**
 * Definition for an interval.
 * public class Interval {
 *     int start;
 *     int end;
 *     Interval() { start = 0; end = 0; }
 *     Interval(int s, int e) { start = s; end = e; }
 * }
 */
public class Solution {
    public int minMeetingRooms(Interval[] intervals) {
        int[] starts = new int[intervals.length];
        int[] ends = new int[intervals.length];

        for (int i = 0; i < intervals.length; i++) {
            starts[i] = intervals[i].start;
            ends[i] = intervals[i].end;
        }

        Arrays.sort(starts);
        Arrays.sort(ends);

        int maxRooms = 0;
        int endIndex = 0;
        int startIndex = 0;

        while (startIndex < intervals.length) {
            if (starts[startIndex] < ends[endIndex]) {
                maxRooms++;
            } else {
                endIndex++;
            }
            startIndex++;
        }

        return maxRooms;
    }
}

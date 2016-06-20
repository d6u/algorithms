/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const changes = [];

    // 1. Transform intervals into a sequence of changes
    for (const interval of intervals) {
        changes.push([interval.start, 1], [interval.end, -1]);
    }

    // 2. Sort change by timestamp ASC
    // If timestamps are the same, sort meeting end first to smaller
    // index, i.e. change[1]
    changes.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1]);

    let maxRoom = 0;
    let curRoom = 0;

    // 3. Add up changes and compare the peak
    for (const change of changes) {
        curRoom += change[1];
        maxRoom = Math.max(maxRoom, curRoom);
    }

    return maxRoom;
};

console.log(minMeetingRooms([[2,7]]));

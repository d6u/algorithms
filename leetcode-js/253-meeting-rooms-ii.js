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
    var changes = [];
    for (var interval of intervals) {
        changes.push([interval.start, 1], [interval.end, -1]);
    }
    changes.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1]);
    var maxRoom = 0;
    var curRoom = 0;
    for (var change of changes) {
        curRoom = curRoom + change[1];
        maxRoom = Math.max(curRoom, maxRoom);
    }
    return maxRoom;
};

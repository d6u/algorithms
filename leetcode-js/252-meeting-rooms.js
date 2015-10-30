/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort((a, b) => a.start - b.start);

    for (var i = 0; i < intervals.length - 1; i++) {
        if (intervals[i].end > intervals[i+1].start) {
            return false;
        }
    }

    return true;
};

function Interval(start, end) {
  this.start = start;
  this.end = end;
}

console.log(canAttendMeetings([new Interval(5, 8), new Interval(6, 8)]));

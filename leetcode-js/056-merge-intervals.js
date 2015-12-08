/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }

    intervals.sort((a, b) => a.start - b.start);

    var results = [];
    var start = intervals[0].start;
    var end = intervals[0].end;

    for (var interval of intervals) {
        if (interval.start <= end) {
            end = Math.max(end, interval.end);
        } else {
            results.push(new Interval(start, end));
            start = interval.start;
            end = interval.end;
        }
    }

    results.push(new Interval(start, end));

    return results;
};

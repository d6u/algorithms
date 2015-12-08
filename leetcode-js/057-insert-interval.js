/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    var results = [];
    var i = 0;

    while (i < intervals.length && intervals[i].end < newInterval.start) {
        results.push(intervals[i]);
        i += 1;
    }

    while (i < intervals.length && intervals[i].start <= newInterval.end) {
        newInterval = new Interval(
            Math.min(newInterval.start, intervals[i].start),
            Math.max(newInterval.end, intervals[i].end)
        );
        i += 1;
    }

    results.push(newInterval);

    while (i < intervals.length) {
        results.push(intervals[i]);
        i += 1;
    }

    return results;
};

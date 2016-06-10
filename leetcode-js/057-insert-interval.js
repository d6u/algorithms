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
    const result = [];
    let i = 0;

    while (i < intervals.length && intervals[i].end < newInterval.start) {
        result.push(intervals[i]);
        i += 1;
    }

    while (i < intervals.length && intervals[i].start <= newInterval.end) {
        newInterval = new Interval(
            Math.min(newInterval.start, intervals[i].start),
            Math.max(newInterval.end, intervals[i].end)
        );
        i += 1;
    }

    result.push(newInterval);

    while (i < intervals.length) {
        result.push(intervals[i]);
        i += 1;
    }

    return result;
};

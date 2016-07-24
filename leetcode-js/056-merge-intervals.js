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

    const result = [];
    let {start, end} = intervals[0];

    for (const interval of intervals.slice(1)) {
        if (interval.start <= end) {
            // When next interval starts before it ends, extend the ending
            end = Math.max(end, interval.end);
        } else {
            // When no overlap, merge previous overlapped intervals
            result.push(new Interval(start, end));

            // Set new start and end
            start = interval.start;
            end = interval.end;
        }
    }

    result.push(new Interval(start, end));

    return result;
};

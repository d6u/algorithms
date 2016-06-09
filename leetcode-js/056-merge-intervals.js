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

    for (const interval of intervals) {
        if (interval.start <= end) {
            end = Math.max(end, interval.end);
        } else {
            result.push(new Interval(start, end));
            start = interval.start;
            end = interval.end;
        }
    }

    result.push(new Interval(start, end));

    return result;
};

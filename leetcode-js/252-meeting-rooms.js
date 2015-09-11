/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param  {Interval[]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  if (intervals.length === 0) {
    return true;
  }

  var changes = new Map();
  var i;
  var val;

  for (i of intervals) {
    val = changes.get(i.start);
    changes.set(i.start, val == null ? 1 : val + 1);

    val = changes.get(i.end)
    changes.set(i.end, val == null ? -1 : val - 1);
  }

  var keys = [];
  var key;

  for (key of changes.keys()) {
    keys.push(key);
  }

  keys.sort((a, b) => a - b);

  var rooms = 0;
  var maxrooms = 0;

  for (key of keys) {
    rooms += changes.get(key);
    maxrooms = Math.max(maxrooms, rooms);
  }

  return maxrooms === 1;
};

function Interval(start, end) {
  this.start = start;
  this.end = end;
}

console.log(canAttendMeetings([new Interval(5, 8), new Interval(6, 8)]));

'use strict';

// add O(logn)
// get O(n)

class Intervals {
  constructor() {
    this.intervals = [];
  }

  add(interval) {
    const [start, end] = interval;
    this.addStart(start);
    this.addEnd(end);
  }

  addStart(start) {
    const [target, found] = this.findInsertPosition(start);
    if (found) {
      this.intervals[target][1] += 1;
    } else {
      this.intervals.splice(target, 0, [start, 1]);
    }
  }

  addEnd(end) {
    const [target, found] = this.findInsertPosition(end);
    if (found) {
      this.intervals[target][1] -= 1;
    } else {
      this.intervals.splice(target, 0, [end, -1]);
    }
  }

  findInsertPosition(time) {
    let left = 0;
    let right = this.intervals.length - 1;
    let target;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (this.intervals[mid][0] === time) {
        target = mid;
        break;
      } else if (this.intervals[mid][0] < time) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    if (target == null) {
      return [left, false];
    } else {
      return [target, true];
    }
  }

  get() {
    const res = [];
    let count = 0;
    let interval;
    for (const [time, change] of this.intervals) {
      if (count === 0) {
        interval = [time];
        count += change;
      } else {
        count += change;
        if (count === 0) {
          interval.push(time);
          res.push(interval);
        }
      }
    }
    return res;
  }
}

const intervals = new Intervals();
intervals.add([1,2]);
console.log(intervals.get());
intervals.add([1,2]);
console.log(intervals.get());
intervals.add([2,3]);
console.log(intervals.get());
intervals.add([4,5]);
console.log(intervals.get());

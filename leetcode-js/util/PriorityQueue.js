class PriorityQueue {
    /**
     * @param {Function} getter Get the comparing element
     */
    constructor(getter) {
        this.getter = getter;
        this.queue = [];
    }

    push(val) {
        let left = 0;
        let right = this.queue.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (this.queue[mid] === val) {
                this.queue.splice(mid, 0, val);
                return;
            }
            if (this.getter(val) > this.getter(this.queue[mid])) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        this.queue.splice(left, 0, val);
    }

    pop() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
};

module.exports = PriorityQueue;

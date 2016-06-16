class ZigzagIterator {
    /**
     * @constructor
     * @param {Integer[]} v1
     * @param {Integer[]} v1
     */
    constructor(v1, v2) {
        this.list = [];
        if (v1.length) {
            this.list.push(v1);
        }
        if (v2.length) {
            this.list.push(v2);
        }
    }

    /**
     * @this ZigzagIterator
     * @returns {boolean}
     */
    hasNext() {
        return this.list.length !== 0;
    }

    /**
     * @this ZigzagIterator
     * @returns {integer}
     */
    next() {
        const arr = this.list.shift();
        const result = arr.shift();
        if (arr.length) {
            this.list.push(arr);
        }
        return result;
    }
}

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

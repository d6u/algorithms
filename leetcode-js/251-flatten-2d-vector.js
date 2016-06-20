class Vector2D {
    /**
     * @constructor
     * @param {Integer[][]} vec2d
     */
    constructor(vec2d) {
        this.vec2d = vec2d;
        this.index1 = 0;
        this.arr = null;
        this.index2 = null;
    }

    /**
     * @this Vector2D
     * @returns {boolean}
     */
    hasNext() {
        while ((this.arr == null || this.index2 >= this.arr.length) &&
            this.index1 < this.vec2d.length) {

            this.arr = this.vec2d[this.index1];
            this.index2 = 0;
            this.index1 += 1;
        }
        return this.arr != null && this.index2 < this.arr.length;
    }

    /**
     * @this Vector2D
     * @returns {integer}
     */
    next() {
        this.hasNext();
        const val = this.arr[this.index2];
        this.index2 += 1;
        return val;
    }
}

/**
 * Your Vector2D will be called like this:
 * var i = new Vector2D(vec2d), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

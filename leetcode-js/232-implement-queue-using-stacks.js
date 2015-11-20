/**
 * @constructor
 */
var Queue = function() {
    this.input = [];
    this.output = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.input.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    this.peek();
    this.output.pop();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    if (this.output.length === 0) {
        while (this.input.length) {
            this.output.push(this.input[this.input.length-1]);
            this.input.pop();
        }
    }
    return this.output[this.output.length-1];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return this.input.length === 0 && this.output.length === 0;
};

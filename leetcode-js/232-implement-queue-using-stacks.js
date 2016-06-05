/**
 * @constructor
 */
var Queue = function() {
    this.stack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    const tmpStack = [];
    while (this.stack.length) {
        tmpStack.push(this.stack.pop());
    }
    this.stack.push(x);
    while (tmpStack.length) {
        this.stack.push(tmpStack.pop());
    }
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    return this.stack.pop();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return this.stack.length === 0;
};

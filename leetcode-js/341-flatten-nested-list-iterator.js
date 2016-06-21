/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

class NestedIterator {
    /**
     * @constructor
     * @param {NestedInteger[]} nestedList
     */
    constructor(nestedList) {
        this.stack = [];
        for (let i = nestedList.length - 1; i >= 0; i -= 1) {
            this.stack.push(nestedList[i]);
        }
    }

    /**
     * @this NestedIterator
     * @returns {boolean}
     */
    hasNext() {
        while (this.stack.length) {
            const curr = this.stack[this.stack.length - 1];
            if (curr.isInteger()) {
                return true;
            }
            this.stack.pop();
            for (let i = curr.getList().length - 1; i >= 0; i -= 1) {
                this.stack.push(curr.getList()[i]);
            }
        }
        return false;
    }

    /**
     * @this NestedIterator
     * @returns {integer}
     */
    next() {
        return this.stack.pop().getInteger();
    }
}

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

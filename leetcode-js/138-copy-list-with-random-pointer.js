/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    'use strict';

    if (!head) {
        return null;
    }

    let run = head;

    while (run) {
        let copy = new RandomListNode(run.label);
        copy.next = run.next;
        run.next = copy;
        run = run.next.next;
    }

    run = head;

    while (run) {
        if (run.random) {
            run.next.random = run.random.next;
        }
        run = run.next.next;
    }

    let newHead = new RandomListNode(0);
    let newRun;

    run = head;
    newHead.next = head.next;

    while (run) {
        newRun = run.next;
        run.next = newRun.next;
        if (run.next) {
            newRun.next = newRun.next.next;
        }
        run = run.next;
    }

    return newHead.next;
};

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
    if (!head) {
        return null;
    }

    // 1. Insert copied nodes

    let node = head;

    while (node) {
        const copy = new RandomListNode(node.label);
        copy.next = node.next;
        node.next = copy;
        node = copy.next;
    }

    // 2. Copy random pointer

    node = head;

    while (node) {
        if (node.random) {
            node.next.random = node.random.next;
        }
        node = node.next.next;
    }

    // 3. Decouple linked lists

    node = head;
    let copiedNode = node.next;
    const copiedHead = node.next;

    while (node) {
        node.next = copiedNode.next;
        node = node.next;
        if (copiedNode.next) {
            copiedNode.next = copiedNode.next.next;
        }
        copiedNode = copiedNode.next;
    }

    return copiedHead;
};

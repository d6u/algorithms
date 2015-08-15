/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param  {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  'use strict';

  if (!head) return null;
  if (!head.next) return head;

  let dummyHead = new ListNode(0);
  dummyHead.next = head;
  let p1 = head;

  while (p1.next) {
    let p2 = dummyHead;
    while (p2.next !== p1.next && p2.next.val < p1.next.val) {
      p2 = p2.next;
    }

    if (p2.next !== p1.next) {
      let tmp2 = p2.next;
      let tmp1 = p1.next.next;
      p2.next = p1.next;
      p2.next.next = tmp2;
      p2.next = p1.next;
      p1.next = tmp1;
    }
    else {
      p1 = p1.next;
    }

  }

  return dummyHead.next;
};

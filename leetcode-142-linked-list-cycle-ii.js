/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head || !head.next) return null;
  var p1 = head.next;
  var p2 = head.next.next;

  while (p2 && p2.next && p1 !== p2) {
    p1 = p1.next;
    if (!p2.next) return null;
    p2 = p2.next.next;
  }

  if (!p2 || !p2.next) return null;

  p2 = head;

  while (p1 != p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
};

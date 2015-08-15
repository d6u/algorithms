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
var swapPairs = function(head) {
  if (!head || !head.next) return head;
  var n = head.next.next;
  var h = head.next;
  head.next.next = head;
  head.next = swapPairs(n);
  return h;
};

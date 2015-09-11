/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param  {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.length) return null;

  var end = lists.length - 1;
  var begin;

  while (end > 0) {
    begin = 0;
    while (begin < end) {
      lists[begin] = merge2Lists(lists[begin], lists[end]);
      begin += 1;
      end -= 1;
    }
  }

  return lists[0];
};

function merge2Lists(h1, h2) {
  var dummy = new ListNode(0);
  var tail = dummy;

  while (h1 && h2) {
    if (h1.val <= h2.val) {
      tail.next = h1;
      h1 = h1.next;
    } else {
      tail.next = h2;
      h2 = h2.next;
    }
    tail = tail.next;
  }

  tail.next = h1 ? h1 : h2;

  return dummy.next;
}

# Linked List

- [369-plus-one-linked-list.java](./leetcode-java/369-plus-one-linked-list.java)

    Given a non-negative number represented as a singly linked list of digits, plus one to the number. The digits are stored such that the most significant digit is at the head of the list.

- [364-nested-list-weight-sum-ii.java](./leetcode-java/364-nested-list-weight-sum-ii.java)

    Given a nested list of integers, return the sum of all integers in the list weighted by their depth. Each element is either an integer, or a list -- whose elements may also be integers or other lists. The weight is defined from bottom up. i.e., the leaf level integers have weight 1, and the root level integers have the largest weight.

- [328-odd-even-linked-list.java](./leetcode-java/328-odd-even-linked-list.java)

    Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes. You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

- [148-sort-list.java](./leetcode-java/148-sort-list.java)

    Sort a linked list in O(n log n) time using constant space complexity.

- [281-zigzag-iterator.java](./leetcode-java/281-zigzag-iterator.java)

    Given two 1d vectors, implement an iterator to return their elements alternately.

- [002-add-two-numbers.java](./leetcode-java/002-add-two-numbers.java)

    You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

    - Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    - Output: 7 -> 0 -> 8

- [061-rotate-list.java](./leetcode-java/061-rotate-list.java)

    Given a list, rotate the list to the right by k places, where k is non-negative.

- [082-remove-duplicates-from-sorted-list-ii.java](./leetcode-java/082-remove-duplicates-from-sorted-list-ii.java)

    Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

- [086-partition-list.java](./leetcode-java/086-partition-list.java)

    Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x. You should preserve the original relative order of the nodes in each of the two partitions.

- **Review** [092-reverse-linked-list-ii.java](./leetcode-java/092-reverse-linked-list-ii.java)

    Reverse a linked list from position m to n. Do it in-place and in one-pass. For example: Given `1->2->3->4->5->NULL`, m = 2 and n = 4, return `1->4->3->2->5->NULL`.

- [142-linked-list-cycle-ii.java](./leetcode-java/142-linked-list-cycle-ii.java)

    Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

- [143-reorder-list.java](./leetcode-java/143-reorder-list.java)

    Given a singly linked list L: `L0→L1→…→Ln-1→Ln`
    reorder it to: `L0→Ln→L1→Ln-1→L2→Ln-2→…`
    You must do this in-place without altering the nodes' values.

- **Review** [382-linked-list-random-node.java](./leetcode-java/382-linked-list-random-node.java)

    Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.

    ## Follow up:

    What if the linked list is extremely large and its length is unknown to you? Could you solve this efficiently without using extra space?

    ## Example:

    // Init a singly linked list [1,2,3].
    ListNode head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    Solution solution = new Solution(head);

    // getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
    solution.getRandom();

    ## PROBLEM:

    Choose k entries from n numbers. Make sure each number is selected with the probability of k/n

    ## BASIC IDEA:

    - Choose 1, 2, 3, ..., k first and put them into the reservoir.
    - For k+1, pick it with a probability of k/(k+1), and randomly replace a number in the reservoir.
    - For k+i, pick it with a probability of k/(k+i), and randomly replace a number in the reservoir.
    - Repeat until k+i reaches n

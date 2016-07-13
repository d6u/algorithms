# Hard Problems Summary

- [146. LRU Cache](#146-lru-cache)
- [126. Word Ladder II](#126-word-ladder-ii)
- [212. Word Search II](#212-word-search-ii)
- [124. Binary Tree Maximum Path Sum](#124-binary-tree-maximum-path-sum)
- [269. Alien Dictionary](#269-alien-dictionary)

## 146. LRU Cache

1. Use double linked list (has reference to both previous and next item) to access head (most recent) and tail (least recent) in O(1) time.
    - Remove least used item in O(1) time.
    - Add new item in O(1) time.
    - Double linked list can remove any node in O(1), when already has the reference of the node.
2. Use hash table to access any key-node pairs in O(1) time.
3. Maintain a counter to keep track of capacity.
4. When get a key, move the node to head (remove then add) in O(1).
5. When set a key-value, insert node to head, pop tail if out of capacity.

## 126. Word Ladder II

1. Build a graph of words, where neighbours are words with one letter difference.
2. Add begin word to the list.
3. Build from end word, so it will finish at being word. This will make building solution from begin word easier (solutions are from begin to end).
4. While building graph, removing word from set, so it won't be used again.
5. To handle large word list, when looking for neighbour words, we can iterate through 26 English letters (changing one character at once and see if the word is in the list) to avoid iterating through all words.
6. Stop when begin word is among the new neighbours.

## 212. Word Search II

1. Build a trie from words to be found, to avoid duplicate character matchings.
    - Root should be empty string.
2. Use backtrack to iterating though all cells in the matrix for words.
    - When a word is found, remove it from trie.

## 124. Binary Tree Maximum Path Sum

1. Start from bottom nodes (leaf nodes). (Write recursion, recurse down first.)
2. Find max among single value of current node, max sum of left arm (current node's value + max sum from nodes in the left) and right arm.
3. Use max value found above to compare with current max value and sum of left and right arms + current node's value.
4. Return max value found in step 2. So program can advance to the level above current level.
5. How to passing values from step 2 and 3 around is tricky. Easiest way is to use reference type.

## 269. Alien Dictionary

There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

1. Build a one direction graph where letters ranked higher point to lower ones. This was done by comparing adjacent words one by one.
2. Topological sort the graph to get the ordering.

## 23. Merge k Sorted Lists

Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

1. Merge last half list with first half by starting from first and last lists, then increment by 1 from the head and decrement by 1 from the tail. Assign new list to the smaller index.
2. Repeat step 1 until only 1 list left.

## 138. Copy List with Random Pointer

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null. Return a deep copy of the list.

1. Start from the head, follow the regular pointer. Insert a copy of node after itself.
2. Start from the head again, assign random pointer of copies to random pointer's target's copies (`node.random.next`).
3. Decouple the linked list following the regular pointer.
4. Return the head of copied list (remember to save the reference in step 3).

## 99. Recover Binary Search Tree

Two elements of a binary search tree (BST) are swapped by mistake. Recover the tree without changing its structure.

### O(n) recursive

1. In order traverse the tree, save nodes and nodes' values in two arraies.
2. Sort the values.
3. Iterate through the nodes and values, assigning each value to node so the order is fixed. This is because BST in order traversal is ordered from smallest to largest.

### O(1)

TODO

## 25. Reverse Nodes in k-Group

Given a linked list, reverse the nodes of a linked list k at a time and return its modified list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is. You may not alter the values in the nodes, only nodes itself may be changed. Only constant memory is allowed.

1. First count total nodes.
2. Reverse list k nodes at a time.
    - Reverse list requires reference of three nodes:
        - Dummy node for easy track where is the new head.
        - Tail node which was initially the head node.
        - A moving pointer which was initially the next node of the head node.
    - Steps to reverse nodes:
        1. Point next node of tail node to moving pointer's next node.
        2. Point next node of pointer node to dummy node's next node.
        3. Point next node of dummy node to moving pointer.
        4. Move pointer to next of tail node.
        5. Repeat 1-4
3. Use total nodes count to track whether it reaches the end.

## 297. Serialize and Deserialize Binary Tree

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

1. Serialize: preorder traverse the binary tree, put `#` where node is null.
2. Deserialize: recursively build the tree with preorder, assign node to null when `#`.

## 117. Populating Next Right Pointers in Each Node II

Given a binary tree:

```
struct TreeLinkNode {
    TreeLinkNode *left;
    TreeLinkNode *right;
    TreeLinkNode *next;
}
```

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL. Initially, all next pointers are set to NULL. The given tree could be any binary tree.

1. Use 4 pointers:
    - Above left most
    - Above moving
    - Left most
    - Moving
2. When moving to next nodes, utlize next node links already established in the above level.

## 272. Closest Binary Search Tree Value II

Given a non-empty binary search tree and a target value, find k values in the BST that are closest to the target.

1. First inorder traverse from left to build a stack with values smaller than target, where the top of the stack is the biggest value.
2. Then inorder traverse from right to build a stack with values larger than target, where the top of the stack is the smallest value.
3. Popping from each stack until k number of values are found.

### Follow up:

Assume that the BST is balanced, could you solve it in less than O(n) runtime (where n = total nodes)?

## 145. Binary Tree Postorder Traversal

Given a binary tree, return the postorder traversal of its nodes' values.

1. Use a stack.
2. Go down along the left most path while filling up the stack.
3. When reaches the bottom, pop top of stack and push to result.
4. Moving up and try right node of current.

## 287. Find the Duplicate Number

Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

1. Use Robert Floyd Cycle Detection algorithm. The beginning of a cycle is the duplicated number.

# Hard Problems

## Graph and Topological Sort

### 269. Alien Dictionary

_There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language._

[269-alien-dictionary.java](./leetcode-java/269-alien-dictionary.java)

1. Build a one direction graph where letters ranked higher point to lower ones. This was done by comparing letters with the same index between adjacent words.
    - Edge cases:
        - One word
        - Word with different length (make sure put all letters into the graph, otherwise we will miss letters in the output)
        - Circle in the graph
2. Topological sort the graph to get the ordering.
    - DFS (push leaf nodes into the front of array first) or BFS (use indegree)

### **Review** 126. Word Ladder II

_Given two words (`beginWord` and `endWord`), and a dictionary's word list, find all shortest transformation sequence(s) from `beginWord` to `endWord`, such that:_

- _Only one letter can be changed at a time_
- _Each intermediate word must exist in the word list_


    For example,

    Given:
    beginWord = "hit"
    endWord = "cog"
    wordList = ["hot","dot","dog","lot","log"]
    Return
      [
        ["hit","hot","dot","dog","cog"],
        ["hit","hot","lot","log","cog"]
      ]

- All words have the same length.
- All words contain only lowercase alphabetic characters.

[126-word-ladder-ii.java](./leetcode-java/126-word-ladder-ii.java)

1. Add begin word to the list.
2. Build a graph of words, where neighbours are words with one letter difference.
    - Build from end word, so it will finish at being word. This will make building solution from begin word easier (solutions are from begin to end).
    - Build directed graph point from next word to current word (current word is stored as neighbour of next word).
    - Use map to store word to node pairs.
    - While building graph, removing word from set, so it won't be used again.
    - To handle large word list, when looking for neighbour words, we can iterate through 26 English letters (changing one character at once and see if the word is in the list) to avoid iterating through all words.
    - Stop when begin word is among the new neighbours.
3. Extract from begin word use DFS and backtracking.

## Tree and Trie

### 212. Word Search II (matrix)

_Given a 2D board and a list of words from the dictionary, find all words in the board. Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word._

[212-word-search-ii.java](./leetcode-java/212-word-search-ii.java)

1. Build a trie from words to be found.
    - Root should be empty string.
    - Store the word at the leaf of each trie node.
    - Set leaf's word to null after found to avoid duplicate.
2. Use backtrack to iterating though all cells in the matrix.
    - Mark current cell to `#` when recursing down.

### **Review** 336. Palindrome Pairs

_Given a list of unique words. Find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome._

    Example 1:

    Given words = ["bat", "tab", "cat"]
    Return [[0, 1], [1, 0]]
    The palindromes are ["battab", "tabbat"]

    Example 2:

    Given words = ["abcd", "dcba", "lls", "s", "sssll"]
    Return [[0, 1], [1, 0], [3, 2], [2, 4]]
    The palindromes are ["dcbaabcd", "abcddcba", "slls", "llssssll"]

[336-palindrome-pairs.java](./leetcode-java/336-palindrome-pairs.java)

1. Build a trie from word list.
    - Build trie nodes from the last character of a word.
    - Save word's index for later reference.
    - Save word's index to a list on the node if a word's first part is a palindrome.
2. Search each word within the trie.
    - Skil node that is the same word as current word.
    - If a node along the way represents a word, but current word hasn't finished, check whether the rest part of current word is a palindrome. If it is a palindrome, current word and the trie node can assemble a solution.
    - After exhausting all letters in current word, check out the palindrome index list on the last node (if last node is not null). Each of them can assemble a solution (make sure index is different from current).
3. Notice `""` is a palindrome and can be part of a solution. However, if the program is written properly, don't have to treat `""` specially.

### 124. Binary Tree Maximum Path Sum

_Given a binary tree, find the maximum path sum. For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path does not need to go through the root._

    For example:
    Given the below binary tree,

       1
      / \
     2   3

    Return 6.

[124-binary-tree-maximum-path-sum.java](./leetcode-java/124-binary-tree-maximum-path-sum.java)

1. Start from leaf nodes (recurse down first).
2. Find current max among current node's value, max sum of left arm (current node's value + max sum from nodes in the left), and right arm.
3. Find global max value among current max value, current node's value, and sum of both arms (don't add current node's sum twice).
4. Return current max value found in step 2, so program can advance to the level above.
5. Pass global max value as reference type argument so it can be updated on each level.

### 99. Recover Binary Search Tree

_Two elements of a binary search tree (BST) are swapped by mistake. Recover the tree without changing its structure. A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?_

#### O(log n) space recursive

In order traversal

#### O(1) space Morris Traversal

_Optional_ [099-recover-binary-search-tree_morris-traversal.java](./leetcode-java/099-recover-binary-search-tree_morris-traversal.java), http://www.cnblogs.com/AnnieKim/archive/2013/06/15/morristraversal.html

### **Review** 117. Populating Next Right Pointers in Each Node II

_Given a binary tree:_

    struct TreeLinkNode {
        TreeLinkNode *left;
        TreeLinkNode *right;
        TreeLinkNode *next;
    }

_Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL. Initially, all next pointers are set to NULL. The given tree could be any binary tree. You may only use constant extra space._

    For example,

    Given the following binary tree,

             1
           /  \
          2    3
         / \    \
        4   5    7

    After calling your function, the tree should look like:
             1 -> NULL
           /  \
          2 -> 3 -> NULL
         / \    \
        4-> 5 -> 7 -> NULL

[117-populating-next-right-pointers-in-each-node-ii.java](./leetcode-java/117-populating-next-right-pointers-in-each-node-ii.java)

1. Use 4 pointers:
    - Above left most
    - Above moving
    - Left most
    - Moving
2. When moving to next nodes, utlize next node links already established in the above level.

### **Review** 145. Binary Tree Postorder Traversal

_Given a binary tree, return the postorder traversal of its nodes' values._

[145-binary-tree-postorder-traversal.java](./leetcode-java/145-binary-tree-postorder-traversal.java)

1. Use a stack.
2. Go down along the left most path while filling up the stack.
3. When reaches the bottom, pop top of stack and push to result.
4. Moving up and try right node.

### **Review** 272. Closest Binary Search Tree Value II

_Given a non-empty binary search tree and a target value, find k values in the BST that are closest to the target._

- _Given target value is a floating point._
- _You may assume k is always valid, that is: k ≤ total nodes._
- _You are guaranteed to have only one unique set of k values in the BST that are closest to the target._

_Follow up:_

_Assume that the BST is balanced, could you solve it in less than O(n) runtime (where n = total nodes)?_

[272-closest-binary-search-tree-value-ii.java](./leetcode-java/272-closest-binary-search-tree-value-ii.java)

1. Push successor and predecessor nodes into two stacks.
2. While getting closest values, after poping a node, keep pushing more successor or predecessor nodes into the stack.
3. Repeat until finish.

### 297. Serialize and Deserialize Binary Tree

_Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure._

[297-serialize-and-deserialize-binary-tree.java](./leetcode-java/297-serialize-and-deserialize-binary-tree.java)

1. Serialize: recursively preorder traverse the binary tree, put `#` where node is null.
2. Deserialize: recursively build the tree with preorder, assign node to null when `#`.

### **Review** 315. Count of Smaller Numbers After Self

_You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i]._

    Example:

    Given nums = [5, 2, 6, 1]

    To the right of 5 there are 2 smaller elements (2 and 1).
    To the right of 2 there is only 1 smaller element (1).
    To the right of 6 there is 1 smaller element (1).
    To the right of 1 there is 0 smaller element.

    Return the array [2, 1, 1, 0].

[315-count-of-smaller-numbers-after-self.java](./leetcode-java/315-count-of-smaller-numbers-after-self.java)

1. Build BST

## Linked List

### 287. Find the Duplicate Number

_Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one._

- _You must not modify the array (assume the array is read only)._
- _You must use only constant, O(1) extra space._
- _Your runtime complexity should be less than O(n2)._
- _There is only one duplicate number in the array, but it could be repeated more than once._

[287-find-the-duplicate-number.java](./leetcode-java/287-find-the-duplicate-number.java)

1. Use Robert Floyd Cycle Detection algorithm. The beginning of a cycle is the duplicated number.

### **TODO** 23. Merge k Sorted Lists

_Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity._

1. Merge last half list with first half by starting from first and last lists, then increment by 1 from the head and decrement by 1 from the tail. Assign new list to the smaller index.
2. Repeat step 1 until only 1 list left.

[023-merge-k-sorted-lists.java](./leetcode-java/023-merge-k-sorted-lists.java)

### **Review** 138. Copy List with Random Pointer

_A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null. Return a deep copy of the list._

[138-copy-list-with-random-pointer.java](./leetcode-java/138-copy-list-with-random-pointer.java)

1. Start from the head, follow the regular pointer. Insert a copy of node after itself.
2. Start from the head again, assign random pointer of copied node to random pointer's copy (`node.random.next`).
3. Start from the head again, decouple the linked list following the regular pointer.
4. Return the head of copied list.

### 25. **Review** Reverse Nodes in k-Group

_Given a linked list, reverse the nodes of a linked list k at a time and return its modified list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is. You may not alter the values in the nodes, only nodes itself may be changed. Only constant memory is allowed._

    For example,

    Given this linked list: 1->2->3->4->5

    For k = 2, you should return: 2->1->4->3->5

    For k = 3, you should return: 3->2->1->4->5

[025-reverse-nodes-in-k-group.java](./leetcode-java/025-reverse-nodes-in-k-group.java)

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

### 146. LRU Cache

_Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: `get` and `set`._

- _`get(key)` - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1._
- _`set(key, value)` - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item._

[146-lru-cache.java](./leetcode-java/146-lru-cache.java)

1. Use double linked list (has reference to both previous and next item) to access head (most recent) and tail (least recent) in O(1) time.
    - Remove least used item in O(1) time.
    - Add new item in O(1) time.
    - Double linked list can remove any node in O(1), when already has the reference of the node.
2. Use hash table to access any key-node pairs in O(1) time.
3. Maintain a counter to keep track of capacity.
4. When get a key, move the node to head (remove then add) in O(1).
5. When set a key-value, insert node to head, pop tail if out of capacity.

## Divide and Conquer

### **Review** 327. Count of Range Sum

_Given an integer array nums, return the number of range sums that lie in [lower, upper] inclusive. Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j (i ≤ j), inclusive._

_A naive algorithm of O(n2) is trivial. You MUST do better than that._

_Example: given nums = [-2, 5, -1], lower = -2, upper = 2, Return 3. The three ranges are : [0, 0], [2, 2], [0, 2] and their respective sums are: -2, -1, 2._

- [Segment tree](./leetcode-java/327-count-of-range-sum_segment-tree.java)
- [Merge sort](./leetcode-java/327-count-of-range-sum_merge-sort.java)

1. Transform range sum into `sums[i2] - sums[i1]` (prefix sum), where `i2 > i1`.
2. Merge sort prefix sums. While sorting, count how many `lower <= sums[i2] - sums[i1] <= upper`.

### 312. Burst Balloons

_Given n balloons, indexed from 0 to n-1. Each balloon is painted with a number on it represented by array nums. You are asked to burst all the balloons. If you burst balloon i you will get nums[left] * nums[i] * nums[right] coins. Here left and right are adjacent indices of i. After the burst, the left and right then becomes adjacent._

_Find the maximum coins you can collect by bursting the balloons wisely._

- _You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can not burst them._
_ _0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100_


    Example:

    Given [3, 1, 5, 8]

    Return 167

        nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
       coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167

[312-burst-balloons.java](./leetcode-java/312-burst-balloons.java)

1. Insert `1` to both ends of the array for easy calculation.
2. Start from the end, insert balloom and calculate the coins earned.
3. Memorize the result using 2D array, `memo[left][right]` means how many coins can be earned by bursting ballooms between `left` and `right` index exclusive.

## Union Find

### **Review** 305. Number of Islands II

_A 2d grid map of m rows and n columns is initially filled with water. We may perform an addLand operation which turns the water at position (row, col) into a land. Given a list of positions to operate, count the number of islands after each addLand operation. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water._

    Example:

    Given m = 3, n = 3, positions = [[0,0], [0,1], [1,2], [2,1]].
    Initially, the 2d grid grid is filled with water. (Assume 0 represents water and 1 represents land).

    0 0 0
    0 0 0
    0 0 0
    Operation #1: addLand(0, 0) turns the water at grid[0][0] into a land.

    1 0 0
    0 0 0   Number of islands = 1
    0 0 0
    Operation #2: addLand(0, 1) turns the water at grid[0][1] into a land.

    1 1 0
    0 0 0   Number of islands = 1
    0 0 0
    Operation #3: addLand(1, 2) turns the water at grid[1][2] into a land.

    1 1 0
    0 0 1   Number of islands = 2
    0 0 0
    Operation #4: addLand(2, 1) turns the water at grid[2][1] into a land.

    1 1 0
    0 0 1   Number of islands = 3
    0 1 0
    We return the result as an array: [1, 1, 2, 3]

_Can you do it in time complexity O(k log mn), where k is the length of the positions?_

[305-number-of-islands-ii.java](./leetcode-java/305-number-of-islands-ii.java)

1. Create UnionFind2D class
    - Use path compression and weight balancing to keep tree flat to improve performance.
2. Iterate through all positions
    - Lookup 4 cells nearby to see if there are two islands that can be connected.
    - Pay attention to how to identify whether a cell has been turned into an island.

### **Review** 128. Longest Consecutive Sequence

_Given an unsorted array of integers, find the length of the longest consecutive elements sequence._

    For example,

    Given [100, 4, 200, 1, 3, 2],
    The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

_Your algorithm should run in O(n) complexity._

[128-longest-consecutive-sequence.java](./leetcode-java/128-longest-consecutive-sequence.java)

1. Create a map to store all number as key, the length of connected sequence as value.
2. Iterate through each number:
    1. Skip any number that's already has a key in the map.
    2. Look left and right one number to see if current number is adjacent to any existing sequence.
    3. Extend the sequence with new sequences connected by current number.
    4. Mark the length of new sequence at the boundaries.
    5. Update maximum length with current sequence length.

## DFS and BFS

### 329. Longest Increasing Path in a Matrix

_Given an integer matrix, find the length of the longest increasing path. From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed)._

[329-longest-increasing-path-in-a-matrix.java](./leetcode-java/329-longest-increasing-path-in-a-matrix.java)

1. Loop through all members of the matrix.
    1. DFS in four directions, measure the length of increasing path along the way.
    2. Cache the max length in a separate matrix to avoid repeated visits.
2. Keep updating max path found until all done.

### 317. Shortest Distance from All Buildings

_You want to build a house on an empty land which reaches all buildings in the shortest amount of distance. You can only move up, down, left and right. You are given a 2D grid of values 0, 1 or 2, where:_

- _Each 0 marks an empty land which you can pass by freely._
- _Each 1 marks a building which you cannot pass through._
- _Each 2 marks an obstacle which you cannot pass through._


    For example, given three buildings at (0,0), (0,4), (2,2), and an obstacle at (0,2):

    1 - 0 - 2 - 0 - 1
    |   |   |   |   |
    0 - 0 - 0 - 0 - 0
    |   |   |   |   |
    0 - 0 - 1 - 0 - 0

    The point (1,2) is an ideal empty land to build a house, as the total travel distance of 3+3+1=7 is minimal. So return 7.

_There will be at least one building. If it is not possible to build such house according to the above rules, return -1._

[317-shortest-distance-from-all-buildings.java](./leetcode-java/317-shortest-distance-from-all-buildings.java)

1. Create a separate matrix to record the distance to all buildings.
2. Loop through all buildings:
    - Use a decreasing number to mark visited empty lands. Initially equals to `0` to match empty land mark.
    - Add distance to current building to exiting values in distance matrix to record total distance to of all visited buildings.
    - Track minimum along the way.
3. Update minimum after process each building.

### 301. Remove Invalid Parentheses

_Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results. Note: The input string may contain letters other than the parentheses `(` and `)`._

    Examples:

    "()())()" -> ["()()()", "(())()"]
    "(a)())()" -> ["(a)()()", "(a())()"]
    ")(" -> [""]

- BFS [301-remove-invalid-parentheses_bfs.java](./leetcode-java/301-remove-invalid-parentheses_bfs.java)
- _Optional_ No set [301-remove-invalid-parentheses_no-set.js](./leetcode-js/301-remove-invalid-parentheses_no-set.js)

### **Review** 51. N-Queens

_The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle._

_Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively._

    For example,
    There exist two distinct solutions to the 4-queens puzzle:

    [
     [".Q..",  // Solution 1
      "...Q",
      "Q...",
      "..Q."],

     ["..Q.",  // Solution 2
      "Q...",
      "...Q",
      ".Q.."]
    ]

[051-n-queens.java](./leetcode-java/051-n-queens.java)

1. DFS + backtracking

### **Review** 52. N-Queens II

_Follow up for [N-Queens problem](#51-n-queens). Now, instead outputting board configurations, return the total number of distinct solutions._

[052-n-queens-ii.java](./leetcode-java/052-n-queens-ii.java)

1. DFS + backtracking

### **Review** 282. Expression Add Operators

_Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value._

    Examples:

    "123", 6 -> ["1+2+3", "1*2*3"]
    "232", 8 -> ["2*3+2", "2+3*2"]
    "105", 5 -> ["1*0+5","10-5"]
    "00", 0 -> ["0+0", "0-0", "0*0"]
    "3456237490", 9191 -> []

[282-expression-add-operators.java](./leetcode-java/282-expression-add-operators.java)

1. DFS + backtracking
2. When recurse down, save current number, in case we use `*` in next level, we can make sure computaion priority.

## Binary Search

### 302. Smallest Rectangle Enclosing Black Pixels

_An image is represented by a binary matrix with 0 as a white pixel and 1 as a black pixel. The black pixels are connected, i.e., there is only one black region. Pixels are connected horizontally and vertically. Given the location (x, y) of one of the black pixels, return the area of the smallest (axis-aligned) rectangle that encloses all black pixels._

    For example, given the following image:

    [
      "0010",
      "0110",
      "0100"
    ]

    and x = 0, y = 2,

    Return 6.

[302-smallest-rectangle-enclosing-black-pixels.java](./leetcode-java/302-smallest-rectangle-enclosing-black-pixels.java)

1. Use binary search.
2. First locate left and right boundary by scaning from top row to bottom line by line.
3. Use left and right boundary limit search while locating top and bottom row.
4. Return area.

### **Review** 363. Max Sum of Rectangle No Larger Than K

_Given a non-empty 2D matrix `matrix` and an integer `k`, find the max sum of a rectangle in the matrix such that its sum is no larger than k._

    Example:
    Given matrix = [
      [1,  0, 1],
      [0, -2, 3]
    ]
    k = 2
    The answer is 2. Because the sum of rectangle [[0, 1], [-2, 3]] is 2 and 2 is the max number no larger than k (k = 2).

- _The rectangle inside the matrix must have an area > 0._
- _What if the number of rows is much larger than the number of columns?_

[363-max-sum-of-sub-matrix-no-larger-than-k.java](./leetcode-java/363-max-sum-of-sub-matrix-no-larger-than-k.java)

1. Scan each row.
    1. If number of rows is larger than number of cols, scan cols instead.
    2. Within each iteration, scan every row from current row to the last row.
    3. Create a `sums` array to store sums for each cols.
2. Use `sums` array with in each row scan to calculate max sum sub array no bigger than k.
    - Convert into a prefix sum array to calculate max sum sub array.
    - Use tree set to aid finding values in logn time.
3. Repeat until finish. O(row * row * col * log(col)), that's why we need to ensure row is smaller.

### **TODO** 218. The Skyline Problem

_A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Now suppose you are given the locations and height of all the buildings as shown on a cityscape photo (Figure A), write a program to output the skyline formed by these buildings collectively (Figure B)._

<img src="https://leetcode.com/static/images/problemset/skyline1.jpg" width="400">
<img src="https://leetcode.com/static/images/problemset/skyline2.jpg" width="400" align="right">

_The geometric information of each building is represented by a triplet of integers [Li, Ri, Hi], where Li and Ri are the x coordinates of the left and right edge of the ith building, respectively, and Hi is its height. It is guaranteed that 0 ≤ Li, Ri ≤ INT\_MAX, 0 < Hi ≤ INT\_MAX, and Ri - Li > 0. You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0._

_For instance, the dimensions of all buildings in Figure A are recorded as: `[ [2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8] ]`._

_The output is a list of "key points" (red dots in Figure B) in the format of `[ [x1,y1], [x2, y2], [x3, y3], ... ]` that uniquely defines a skyline. A key point is the left endpoint of a horizontal line segment. Note that the last key point, where the rightmost building ends, is merely used to mark the termination of the skyline, and always has zero height. Also, the ground in between any two adjacent buildings should be considered part of the skyline contour._

_For instance, the skyline in Figure B should be represented as:`[ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ]`._

[218-the-skyline-problem.java](./leetcode-java/218-the-skyline-problem.java)

1. Convert build heights to elevation changes pairs, e.g. `[x, height_change]`, for `height_change`, use negative for increase height, positive for decrease in height.
2. Sort elevation change pairs, put smaller `x` to lower index. If `x` is the same, put increase in height (negative numbers) first.
3. Use a priority queue to track current elevation to add and remove elevation in O(log(n)) time.
4. Looping through heights collected in 1 and 2:
    - If height increase, push to priority queue.
    - If height decrease, remove from priority queue.
    - Track previous height, if the head of priority queue (the current height) is the same, do nothing.
    - If height is different, push current `x` and `height` to result.

### 33. Search in Rotated Sorted Array

_Suppose a sorted array is rotated at some pivot unknown to you beforehand. (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2). You are given a target value to search. If found in the array return its index, otherwise return -1. You may assume no duplicate exists in the array._

[033-search-in-rotated-sorted-array.java](./leetcode-java/033-search-in-rotated-sorted-array.java)

1. Using binary search.
2. In each iteration:
    1. Determine which part of array is sorted properly.
    2. Compare target with boundary of the sorted part. If target falls in the boundary, focus in this part in next iteration. If not, focus in the other part.
    3. Repeat until found.

## Matrix

### 296. Best Meeting Point

_A group of two or more people wants to meet and minimize the total travel distance. You are given a 2D grid of values 0 or 1, where each 1 marks the home of someone in the group. The distance is calculated using Manhattan Distance, where `distance(p1, p2) = |p2.x - p1.x| + |p2.y - p1.y|`._

    For example, given three people living at (0,0), (0,4), and (2,2):

    1 - 0 - 0 - 0 - 1
    |   |   |   |   |
    0 - 0 - 0 - 0 - 0
    |   |   |   |   |
    0 - 0 - 1 - 0 - 0

    The point (0,2) is an ideal meeting point, as the total travel distance of 2+2+2=6 is minimal. So return 6.

[296-best-meeting-point.java](./leetcode-java/296-best-meeting-point.java)

1. Push all coordinates (x and y separately) into two list.
2. Sort the list and calculate the smallest difference between numbers for each list.

## DP

### 123. Best Time to Buy and Sell Stock III

_Say you have an array for which the ith element is the price of a given stock on day i. Design an algorithm to find the maximum profit. You may complete at most two transactions._

[123-best-time-to-buy-and-sell-stock-iii.java](./leetcode-js/123-best-time-to-buy-and-sell-stock-iii.java)

1. Convert to a max sum subarray problem.

### 188. Best Time to Buy and Sell Stock IV

_Say you have an array for which the ith element is the price of a given stock on day i. Design an algorithm to find the maximum profit. You may complete at most k transactions._

[188-best-time-to-buy-and-sell-stock-iv.java](./leetcode-java/188-best-time-to-buy-and-sell-stock-iv.java)

1. Convert to a max sum subarray problem.

### **Review** 330. Patching Array

_Given a sorted positive integer array nums and an integer n, add/patch elements to the array such that any number in range [1, n] inclusive can be formed by the sum of some elements in the array. Return the minimum number of patches required._

    Example 1:
    nums = [1, 3], n = 6
    Return 1.

    Combinations of nums are [1], [3], [1,3], which form possible sums of: 1, 3, 4.
    Now if we add/patch 2 to nums, the combinations are: [1], [2], [3], [1,3], [2,3], [1,2,3].
    Possible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].
    So we only need 1 patch.

    Example 2:
    nums = [1, 5, 10], n = 20
    Return 2.
    The two patches can be [2, 4].

    Example 3:
    nums = [1, 2, 2], n = 5
    Return 0.

[330-patching-array.java](./leetcode-java/330-patching-array.java)

1. Start to build number from `1` using number from left of array.
2. If we can build [1, x], then adding x to the array can build [1, x + x).

### **TODO** 10. Regular Expression Matching

_Implement regular expression matching with support for '.' and '*'._

```
'.' Matches any single character.
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "a*") → true
isMatch("aa", ".*") → true
isMatch("ab", ".*") → true
isMatch("aab", "c*a*b") → true
```

[010-regular-expression-matching.java](./leetcode-java/010-regular-expression-matching.java)

### **Review** 321. Create Maximum Number

_Given two arrays of length m and n with digits 0-9 representing two numbers. Create the maximum number of length k <= m + n from digits of the two. The relative order of the digits from the same array must be preserved. Return an array of the k digits. You should try to optimize your time and space complexity._

    Example 1:
    nums1 = [3, 4, 6, 5]
    nums2 = [9, 1, 2, 5, 8, 3]
    k = 5
    return [9, 8, 6, 5, 3]

    Example 2:
    nums1 = [6, 7]
    nums2 = [6, 0, 4]
    k = 5
    return [6, 7, 6, 0, 4]

    Example 3:
    nums1 = [3, 9]
    nums2 = [8, 9]
    k = 3
    return [9, 8, 9]

[321-create-maximum-number.java](./leetcode-java/321-create-maximum-number.java)

1. Select numbers to assemble max numbser from each array separately.
    - When selecting from each array, keep track of length of selection and numbers left inside the array, to determine whether we can go back and replace numbers with bigger one.
2. Loops through all the possible different size combinations of numbers selection from 1.
3. Merge two group of selected numbers from 1 and compare with previous result.
    - While merging, when two digits are the same, compare following digits, take digit from larger.

### **Review** 214. Shortest Palindrome

_Given a string S, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation._

    For example:

    Given "aacecaaa", return "aaacecaaa".

    Given "abcd", return "dcbabcd".

TODO: KMP

### **Review** 44. Wildcard Matching

_Implement wildcard pattern matching with support for '?' and '*'._

```
'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "*") → true
isMatch("aa", "a*") → true
isMatch("ab", "?*") → true
isMatch("aab", "c*a*b") → false
```

[044-wildcard-matching.js](./leetcode-js/044-wildcard-matching.js)

1. One pass.

### **Review** 265. Paint House II

_There are a row of n houses, each house can be painted with one of the k colors. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color._

_The cost of painting each house with a certain color is represented by a n x k cost matrix. For example, `costs[0][0]` is the cost of painting house 0 with color 0; `costs[1][2]` is the cost of painting house 1 with color 2, and so on... Find the minimum cost to paint all houses._

[265-paint-house-ii.js](./leetcode-js/265-paint-house-ii.js)

### **Review** 85. Maximal Rectangle

_Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing all ones and return its area._

    For example, given the following matrix:

    1 0 1 0 0
    1 0 1 1 1
    1 1 1 1 1
    1 0 0 1 0

    Return 6.

#### Solution 1

[085-maximal-rectangle_dp.js](./leetcode-js/085-maximal-rectangle_dp.js)

#### Solution 2

1. Convert it into [84. Largest Rectangle in Histogram](#84-largest-rectangle-in-histogram).
2. See [085-maximal-rectangle.js](./leetcode-js/085-maximal-rectangle.js).

## Hashmap

### **TODO** 76. Minimum Window Substring

_Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n)._

    For example,
    S = "ADOBECODEBANC"
    T = "ABC"
    Minimum window is "BANC".

_If there is no such window in S that covers all characters in T, return the empty string "". If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S._

[076-minimum-window-substring.java](./leetcode-java/076-minimum-window-substring.java)

### 159. Longest Substring with At Most Two Distinct Characters

_Given a string, find the length of the longest substring T that contains at most 2 distinct characters._

    For example, Given s = “eceba”,

    T is "ece" which its length is 3.

[159-longest-substring-with-at-most-two-distinct-characters.java](./leetcode-java/159-longest-substring-with-at-most-two-distinct-characters.java)

See "340 Longest Substring with At Most K Distinct Characters"

### **Review** 340. Longest Substring with At Most K Distinct Characters

_Given a string, find the length of the longest substring T that contains at most k distinct characters._

    For example, Given s = “eceba” and k = 2,

    T is "ece" which its length is 3.

[340-longest-substring-with-at-most-k-distinct-characters.java](./leetcode-java/340-longest-substring-with-at-most-k-distinct-characters.java)

1. Loop through all characters in the string.
2. Use hashmap (or an array) to track character count.
3. When count increases and less than 1, increment total character number by 1.
4. Update max len in each iteration.
5. When count above k, shrink the substring by removing character from the start. When count of a character is 0, reduce total character number by 1. Move on to next loop.

### 380. Insert Delete GetRandom O(1)

_Design a data structure that supports all following operations in average O(1) time._

- _insert(val): Inserts an item val to the set if not already present._
- _remove(val): Removes an item val from the set if present._
- _getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned._


    Example:

    // Init an empty set.
    RandomizedSet randomSet = new RandomizedSet();

    // Inserts 1 to the set. Returns true as 1 was inserted successfully.
    randomSet.insert(1);

    // Returns false as 2 does not exist in the set.
    randomSet.remove(2);

    // Inserts 2 to the set, returns true. Set now contains [1,2].
    randomSet.insert(2);

    // getRandom should return either 1 or 2 randomly.
    randomSet.getRandom();

    // Removes 1 from the set, returns true. Set now contains [2].
    randomSet.remove(1);

    // 2 was already in the set, so return false.
    randomSet.insert(2);

    // Since 1 is the only number in the set, getRandom always return 1.
    randomSet.getRandom();

[380-insert-delete-getrandom.java](./leetcode-java/380-insert-delete-getrandom.java)

1. Use array to store element for easy retrieval when generating random.
2. Use hash map to store index for O(1) access.

### **Review** 358. Rearrange String k Distance Apart

_Given a non-empty string `str` and an integer `k`, rearrange the string such that the same characters are at least distance k from each other. All input strings are given in lowercase letters. If it is not possible to rearrange the string, return an empty string ""._

    Example 1:
    str = "aabbcc", k = 3

    Result: "abcabc"

    The same letters are at least distance 3 from each other.
    Example 2:
    str = "aaabc", k = 3

    Answer: ""

    It is not possible to rearrange the string.
    Example 3:
    str = "aaadbbcc", k = 2

    Answer: "abacabcd"

    Another possible answer is: "abcabcda"

    The same letters are at least distance 2 from each other.

[358-rearrange-string-k-distance-apart.java](./leetcode-java/358-rearrange-string-k-distance-apart.java)

1. Use hashmap (int array) to count characters within the input string.
2. Use hashmap (int array) to record the smallest index a character can appear.
3. Iterate from 0 to string's length to build the output.
    1. In each iteration, find the next character to append.
    2. Use the character that has the most count, and the index meets the requirement.
    3. Update count and index requirement.
    4. Anytime an character cannot be found, return `""`.

### **TODO** 316. Remove Duplicate Letters

_Given a string which contains only lowercase letters, remove duplicate letters so that every letter appear once and only once. You must make sure your result is the smallest in lexicographical order among all possible results._

    Example:
    Given "bcabc"
    Return "abc"

    Given "cbacdcbc"
    Return "acdb"

[316-remove-duplicate-letters.java](./leetcode-java/316-remove-duplicate-letters.java)

1. Store each char count into a hashmap.
2. Scan all chars, updating the position of first smallest lexicographical chars.
3. Remove all appearance of selected character and repeat again.

## Two Pointers

### **TODO** 30. Substring with Concatenation of All Words

_You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters._

    For example, given:
    s: "barfoothefoobarman"
    words: ["foo", "bar"]

    You should return the indices: [0,9].

[030-substring-with-concatenation-of-all-words.java](./leetcode-java/030-substring-with-concatenation-of-all-words.java)

### 42. Trapping Rain Water

_Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining._

    For example,
    Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.

[042-trapping-rain-water.java](./leetcode-java/042-trapping-rain-water.java)

1. Two pointers.
2. Maintain the highest wall on left and right side.
3. Move shorter side and add space below wall to result.
4. Finish when "left index" > "right index".

## Array

### **TODO** 354. Russian Doll Envelopes

_You have a number of envelopes with widths and heights given as a pair of integers (w, h). One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope. What is the maximum number of envelopes can you Russian doll? (put one inside other)_

    Example:
    Given envelopes = [[5,4],[6,4],[6,7],[2,3]], the maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).

[354-russian-doll-envelopes.java](./leetcode-java/354-russian-doll-envelopes.java)

### **Review** 239. Sliding Window Maximum

_Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the maximum number for each sliding window position._

    For example,
    Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

    Window position                Max
    ---------------               -----
    [1  3  -1] -3  5  3  6  7       3
     1 [3  -1  -3] 5  3  6  7       3
     1  3 [-1  -3  5] 3  6  7       5
     1  3  -1 [-3  5  3] 6  7       5
     1  3  -1  -3 [5  3  6] 7       6
     1  3  -1  -3  5 [3  6  7]      7
    Therefore, return the max sliding window as [3,3,5,5,6,7].

_You may assume k is always valid, ie: 1 ≤ k ≤ input array's size for non-empty array._

[239-sliding-window-maximum.java](./leetcode-java/239-sliding-window-maximum.java)

1. Use `Deque`.
2. Scan all the number.
    1. Poll out element that out of range.
    2. Poll last element that are smaller than current element.
    3. The first element is always the largest.

### **Review** 56. Merge Intervals

_Given a collection of intervals, merge all overlapping intervals._

[056-merge-intervals.java](./leetcode-java/056-merge-intervals.java)

1. Sort intervals.
2. Scan all intervals. Extend current interval if end >= start.
3. Pay attention to details.

### 57. Insert Interval

_Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary). You may assume that the intervals were initially sorted according to their start times._

    Example 1:
    Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].

    Example 2:
    Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].

    This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].

[057-insert-interval.java](./leetcode-java/057-insert-interval.java)

1. Scan intervals.
2. Save all intervals that has end time smaller than new interval's start time.
3. Merge intervals that has start time smaller or equal to new interval's end time by expanding the start and end time of new interval.
4. Save all of the rest.

### **Review** 158. Read N Characters Given Read4 II - Call multiple times

_The API: int read4(char *buf) reads 4 characters at a time from a file._

_The return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file._

_By using the read4 API, implement the function int read(char *buf, int n) that reads n characters from the file._

_The read function may be called multiple times._

[158-read-n-characters-given-read4-ii-call-multiple-times.java](./leetcode-java/158-read-n-characters-given-read4-ii-call-multiple-times.java)

## Other

### **Review** 224. Basic Calculator

_Implement a basic calculator to evaluate a simple expression string. The expression string may contain open `(` and closing parentheses `)`, the plus `+` or minus sign `-`, non-negative integers and empty spaces ` `. You may assume that the given expression is always valid._

[224-basic-calculator.java](./leetcode-java/224-basic-calculator.java)

1. Use stack.

### **TODO** 295. Find Median from Data Stream

Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

Examples:

`[2,3,4]` , the median is 3

`[2,3]`, the median is `(2 + 3) / 2 = 2.5`

Design a data structure that supports the following two operations:

- `void addNum(int num)` - Add a integer number from the data stream to the data structure.
- `double findMedian()` - Return the median of all elements so far.

```
For example:

add(1)
add(2)
findMedian() -> 1.5
add(3)
findMedian() -> 2
```

[295-find-median-from-data-stream.java](./leetcode-java/295-find-median-from-data-stream.java)

1. Use heap.

### **Review** 273. Integer to English Words

_Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than `2^31 - 1`._

[273-integer-to-english-words.js](./leetcode-js/273-integer-to-english-words.js)

---

## 149. Max Points on a Line

_Given n points on a 2D plane, find the maximum number of points that lie on the same straight line._

1. Iterating through each point, with all points after it:
    - Count overlaping points.
    - Count points when connected with current point, the line is vertical to x axis.
    - Create a dictionary to count all points when connected with current point, the line has the same slope.
    - Compare which number is bigger. Overlaps can be count to any group.

## 335. Self Crossing

_You are given an array x of n positive numbers. You start at point (0,0) and moves x[0] metres to the north, then x[1] metres to the west, x[2] metres to the south, x[3] metres to the east and so on. In other words, after each move your direction changes counter-clockwise. Write a one-pass algorithm with O(1) extra space to determine, if your path crosses itself, or not._

1. Start from the 4th line (index 3),
2. Compare if line i and i - 3 cross each other.
3. If line i and i - 4 **overlap** each other (when index >= 4).
4. If line i and i - 5 cross each other.

## 233. Number of Digit One

_Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n._

1. Go through the digit positions one at a time, find out how often a "1" appears at each position, and sum those up.
    1. Divid digits into three groups:
        - Current digit
        - Digits on the left of current
        - Digits on the right of current

        ```
        3141 5 60
        ^^^^ ^ ^^
        a    b  c
        ```

    2. 1 appears at b position for `a * 100` times (`0` to `3140`)
    3. Depends on the value of b
        - If b was `0`, when a is `3141`, b will never have `1`.
        - If b was `1`, when a is `3141`, b will have `1` for c + 1 times (`0` to `60`).
        - If b was greater or equal to `2`, b will have `1` for 100 times.
2. Repeat 1 for every digit.

## 4. Median of Two Sorted Arrays

_There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n))._

1. Divide each arry into two parts using its middle element.
2. Compare two middle elements and remove one of the four parts.
3. Repeat 1-2 until find the mediam.
4. If total count of numbers is even, you have to do 1-3 again to find two numbers to calculate the median.

## 154. Find Minimum in Rotated Sorted Array II

_Suppose a sorted array is rotated at some pivot unknown to you beforehand. (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2). Find the minimum element. The array may contain duplicates._

1. Follow binary search approach.
2. Compare mid with right:
    - If equals, can be `44404` or `01444`, so not sure smallest is at where part. Move right pointer to left by 1.
    - If mid is less than right, smallest must be in left part, including mid.
    - If mid is larger than right, smallest must be in the right part, excluding mid.
3. Repeat until left no longer less than right.
4. Left is the index.

## 68. Text Justification

_Given an array of words and a length L, format the text such that each line has exactly L characters and is fully (left and right) justified. You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly L characters. Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right. For the last line of text, it should be left justified and no extra space is inserted between words._

See [068-text-justification_shorter.js](./leetcode-js/068-text-justification_shorter.js).

## 140. Word Break II

_Given a string s and a dictionary of words dict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences._

See [140-word-break-ii.js](./leetcode-js/140-word-break-ii.js)

## 174. Dungeon Game

_The demons had captured the princess (P) and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of M x N rooms laid out in a 2D grid. Our valiant knight (K) was initially positioned in the top-left room and must fight his way through the dungeon to rescue the princess._

_The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately._

_Some of the rooms are guarded by demons, so the knight loses health (negative integers) upon entering these rooms; other rooms are either empty (0's) or contain magic orbs that increase the knight's health (positive integers)._

_In order to reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step._

_Write a function to determine the knight's minimum initial health so that he is able to rescue the princess._

See [174-dungeon-game.js](./leetcode-js/174-dungeon-game.js)

## 132. Palindrome Partitioning II

_Given a string s, partition s such that every substring of the partition is a palindrome. Return the minimum cuts needed for a palindrome partitioning of s._

See [132-palindrome-partitioning-ii.js](./leetcode-js/132-palindrome-partitioning-ii.js)

## 32. Longest Valid Parentheses

_Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring._

See [032-longest-valid-parentheses.js](./leetcode-js/032-longest-valid-parentheses.js)

## 97. Interleaving String

_Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2._

See [097-interleaving-string.js](./leetcode-js/097-interleaving-string.js)

## 135. Candy

_There are N children standing in a line. Each child is assigned a rating value. You are giving candies to these children subjected to the following requirements:_

- _Each child must have at least one candy._
- _Children with a higher rating get more candies than their neighbors._

_What is the minimum candies you must give?_

See [135-candy.js](./leetcode-js/135-candy.js)

## 41. First Missing Positive

_Given an unsorted integer array, find the first missing positive integer. Your algorithm should run in O(n) time and uses constant space._

[041-first-missing-positive.js](/leetcode-js/041-first-missing-positive.js).

## 84. Largest Rectangle in Histogram

_Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram._

See [084-largest-rectangle-in-histogram.js](./leetcode-js/084-largest-rectangle-in-histogram.js).

## 45. Jump Game II

_Given an array of non-negative integers, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Your goal is to reach the last index in the minimum number of jumps._

See [045-jump-game-ii.js](./leetcode-js/045-jump-game-ii.js).

## 87. Scramble String

_Given a string s1, we may represent it as a binary tree by partitioning it to two non-empty substrings recursively. Below is one possible representation of s1 = "great":_

```
    great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
```

_To scramble the string, we may choose any non-leaf node and swap its two children. For example, if we choose the node "gr" and swap its two children, it produces a scrambled string "rgeat"._

```
    rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
```

_We say that "rgeat" is a scrambled string of "great". Similarly, if we continue to swap the children of nodes "eat" and "at", it produces a scrambled string "rgtae"._

```
    rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
```

_We say that "rgtae" is a scrambled string of "great". Given two strings s1 and s2 of the same length, determine if s2 is a scrambled string of s1._

See [087-scramble-string.js](./leetcode-js/087-scramble-string.js)

## 164. Maximum Gap

_Given an unsorted array, find the maximum difference between the successive elements in its sorted form. Try to solve it in linear time/space. Return 0 if the array contains less than 2 elements. You may assume all elements in the array are non-negative integers and fit in the 32-bit signed integer range._

See [164-maximum-gap.js](./leetcode-js/164-maximum-gap.js)

## 72. Edit Distance

_Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2. (each operation is counted as 1 step.) You have the following 3 operations permitted on a word:_

- _Insert a character_
- _Delete a character_
- _Replace a character_

See [072-edit-distance_o(n)-space.js](./leetcode-js/072-edit-distance_o%28n%29-space.js)

## 115. Distinct Subsequences

_Given a string S and a string T, count the number of distinct subsequences of T in S. A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not)._

See [115-distinct-subsequences.js](./leetcode-js/115-distinct-subsequences.js)

## 291. Word Pattern II

_Given a pattern and a string str, find if str follows the same pattern. Here follow means a full match, such that there is a bijection (one to one, and vise versa) between a letter in pattern and a non-empty substring in str._

See [291-word-pattern-ii.js](./leetcode-js/291-word-pattern-ii.js)

## 37. Sudoku Solver

_Write a program to solve a Sudoku puzzle by filling the empty cells. Empty cells are indicated by the character '.'. You may assume that there will be only one unique solution._

TODO

See [037-sudoku-solver.js](./leetcode-js/037-sudoku-solver.js)

## 248. Strobogrammatic Number III

_A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down). Write a function to count the total strobogrammatic numbers that exist in the range of low <= num <= high._

See [248-strobogrammatic-number-iii.js](./leetcode-js/248-strobogrammatic-number-iii.js)

## 352. Data Stream as Disjoint Intervals

_Given a data stream input of non-negative integers a1, a2, ..., an, ..., summarize the numbers seen so far as a list of disjoint intervals. For example, suppose the integers from the data stream are 1, 3, 7, 2, 6, ..., then the summary will be:_

    [1, 1]
    [1, 1], [3, 3]
    [1, 1], [3, 3], [7, 7]
    [1, 3], [7, 7]
    [1, 3], [6, 7]

_Follow up: What if there are lots of merges and the number of disjoint intervals are small compared to the data stream's size?_

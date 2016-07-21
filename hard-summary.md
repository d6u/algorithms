# Hard Problems Summary

- [146. LRU Cache](#146-lru-cache)
- [126. Word Ladder II](#126-word-ladder-ii)
- [212. Word Search II](#212-word-search-ii)
- [124. Binary Tree Maximum Path Sum](#124-binary-tree-maximum-path-sum)
- [269. Alien Dictionary](#269-alien-dictionary)

## 146. LRU Cache

_Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: `get` and `set`._

- _`get(key)` - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1._
- _`set(key, value)` - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item._

[146-lru-cache.js](./leetcode-js/146-lru-cache.js)

1. Use double linked list (has reference to both previous and next item) to access head (most recent) and tail (least recent) in O(1) time.
    - Remove least used item in O(1) time.
    - Add new item in O(1) time.
    - Double linked list can remove any node in O(1), when already has the reference of the node.
2. Use hash table to access any key-node pairs in O(1) time.
3. Maintain a counter to keep track of capacity.
4. When get a key, move the node to head (remove then add) in O(1).
5. When set a key-value, insert node to head, pop tail if out of capacity.

## 126. Word Ladder II

_Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:_

- _Only one letter can be changed at a time_
- _Each intermediate word must exist in the word list_

[126-word-ladder-ii.js](./leetcode-js/126-word-ladder-ii.js)

1. Build a graph of words, where neighbours are words with one letter difference.
2. Add begin word to the list.
3. Build from end word, so it will finish at being word. This will make building solution from begin word easier (solutions are from begin to end).
4. While building graph, removing word from set, so it won't be used again.
5. To handle large word list, when looking for neighbour words, we can iterate through 26 English letters (changing one character at once and see if the word is in the list) to avoid iterating through all words.
6. Stop when begin word is among the new neighbours.

## 212. Word Search II

_Given a 2D board and a list of words from the dictionary, find all words in the board. Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word._

[212-word-search-ii.js](./leetcode-js/212-word-search-ii.js)

1. Build a trie from words to be found, to avoid duplicate character matchings.
    - Root should be empty string.
2. Use backtrack to iterating though all cells in the matrix for words.
    - When a word is found, remove it from trie.

## 124. Binary Tree Maximum Path Sum

_Given a binary tree, find the maximum path sum. For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path does not need to go through the root._

[124-binary-tree-maximum-path-sum.js](./leetcode-js/124-binary-tree-maximum-path-sum.js)

1. Start from bottom nodes (leaf nodes). (Write recursion, recurse down first.)
2. Find max among single value of current node, max sum of left arm (current node's value + max sum from nodes in the left) and right arm.
3. Use max value found above to compare with current max value and sum of left and right arms + current node's value.
4. Return max value found in step 2. So program can advance to the level above current level.
5. How to passing values from step 2 and 3 around is tricky. Easiest way is to use reference type.

## 269. Alien Dictionary

_There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language._

1. Build a one direction graph where letters ranked higher point to lower ones. This was done by comparing adjacent words one by one.
2. Topological sort the graph to get the ordering.

## 23. Merge k Sorted Lists


_Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity._

1. Merge last half list with first half by starting from first and last lists, then increment by 1 from the head and decrement by 1 from the tail. Assign new list to the smaller index.
2. Repeat step 1 until only 1 list left.

## 138. Copy List with Random Pointer

_A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null. Return a deep copy of the list._

1. Start from the head, follow the regular pointer. Insert a copy of node after itself.
2. Start from the head again, assign random pointer of copies to random pointer's target's copies (`node.random.next`).
3. Decouple the linked list following the regular pointer.
4. Return the head of copied list (remember to save the reference in step 3).

## 99. Recover Binary Search Tree

_Two elements of a binary search tree (BST) are swapped by mistake. Recover the tree without changing its structure._

### O(n) recursive

1. In order traverse the tree, save nodes and nodes' values in two arraies.
2. Sort the values.
3. Iterate through the nodes and values, assigning each value to node so the order is fixed. This is because BST in order traversal is ordered from smallest to largest.

### O(1)

TODO

## 25. Reverse Nodes in k-Group

_Given a linked list, reverse the nodes of a linked list k at a time and return its modified list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is. You may not alter the values in the nodes, only nodes itself may be changed. Only constant memory is allowed._

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

_Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure._

1. Serialize: preorder traverse the binary tree, put `#` where node is null.
2. Deserialize: recursively build the tree with preorder, assign node to null when `#`.

## 117. Populating Next Right Pointers in Each Node II

_Given a binary tree:_

```
struct TreeLinkNode {
    TreeLinkNode *left;
    TreeLinkNode *right;
    TreeLinkNode *next;
}
```

_Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL. Initially, all next pointers are set to NULL. The given tree could be any binary tree._

1. Use 4 pointers:
    - Above left most
    - Above moving
    - Left most
    - Moving
2. When moving to next nodes, utlize next node links already established in the above level.

## 272. Closest Binary Search Tree Value II

_Given a non-empty binary search tree and a target value, find k values in the BST that are closest to the target._

_Follow up:_

_Assume that the BST is balanced, could you solve it in less than O(n) runtime (where n = total nodes)?_

1. First inorder traverse from left to build a stack with values smaller than target, where the top of the stack is the biggest value.
2. Then inorder traverse from right to build a stack with values larger than target, where the top of the stack is the smallest value.
3. Popping from each stack until k number of values are found.


## 145. Binary Tree Postorder Traversal

_Given a binary tree, return the postorder traversal of its nodes' values._

1. Use a stack.
2. Go down along the left most path while filling up the stack.
3. When reaches the bottom, pop top of stack and push to result.
4. Moving up and try right node of current.

## 287. Find the Duplicate Number

_Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one._

1. Use Robert Floyd Cycle Detection algorithm. The beginning of a cycle is the duplicated number.

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

## 321. Create Maximum Number

_Given two arrays of length m and n with digits 0-9 representing two numbers. Create the maximum number of length k <= m + n from digits of the two. The relative order of the digits from the same array must be preserved. Return an array of the k digits. You should try to optimize your time and space complexity._

1. Select numbers to assemble max numbser from each array separately.
    - When selecting from each array, keep track of length of selection and numbers left inside the array, to determine whether we can go back and replace numbers with bigger one.
2. Loops through all the possible different size combinations of numbers selection from 1.
3. Merge two group of selected numbers from 1 and compare with previous result.
    - While merging, when two digits are the same, compare following digits, take digit from larger.

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

## 218. The Skyline Problem

_A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Now suppose you are given the locations and height of all the buildings as shown on a cityscape photo (Figure A), write a program to output the skyline formed by these buildings collectively (Figure B)._

<img src="https://leetcode.com/static/images/problemset/skyline1.jpg" width="400">
<img src="https://leetcode.com/static/images/problemset/skyline2.jpg" width="400" align="right">

_The geometric information of each building is represented by a triplet of integers [Li, Ri, Hi], where Li and Ri are the x coordinates of the left and right edge of the ith building, respectively, and Hi is its height. It is guaranteed that 0 ≤ Li, Ri ≤ INT\_MAX, 0 < Hi ≤ INT\_MAX, and Ri - Li > 0. You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0._

_For instance, the dimensions of all buildings in Figure A are recorded as: `[ [2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8] ]`._

_The output is a list of "key points" (red dots in Figure B) in the format of `[ [x1,y1], [x2, y2], [x3, y3], ... ]` that uniquely defines a skyline. A key point is the left endpoint of a horizontal line segment. Note that the last key point, where the rightmost building ends, is merely used to mark the termination of the skyline, and always has zero height. Also, the ground in between any two adjacent buildings should be considered part of the skyline contour._

_For instance, the skyline in Figure B should be represented as:`[ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ]`._

1. Convert build heights to elevation changes pairs, e.g. `[x, height_change]`, for `height_change`, use negative for increase height, positive for decrease in height.
2. Sort elevation change pairs, put smaller `x` to lower index. If `x` is the same, put increase in height (negative numbers) first.
3. Use a priority queue to track current elevation to add and remove elevation in O(log(n)) time.
4. Looping through heights collected in 1 and 2:
    - If height increase, push to priority queue.
    - If height decrease, remove from priority queue.
    - Track previous height, if the head of priority queue (the current height) is the same, do nothing.
    - If height is different, push current `x` and `height` to result.

## 327. Count of Range Sum

_Given an integer array nums, return the number of range sums that lie in [lower, upper] inclusive. Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j (i ≤ j), inclusive._

_Example: given nums = [-2, 5, -1], lower = -2, upper = 2, Return 3. The three ranges are : [0, 0], [2, 2], [0, 2] and their respective sums are: -2, -1, 2._

1. Similar to [315. Count of Smaller Numbers After Self](#315-count-of-smaller-numbers-after-self)
2. Transform range sum into `sums[i2] - sums[i1]` (prefix sum), where `i2 > i1`.
3. Merge sort prefix sums. While sorting, count how many `lower <= sums[i2] - sums[i1] <= upper`.
4. Details see [327-count-of-range-sum.js](./leetcode-js/327-count-of-range-sum.js).

## 315. Count of Smaller Numbers After Self

_You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i]._

1. Convert the problem into a merge sort problem:
    - While merging each time an element is moved from right to the left of current element, there is one element on the right is smaller than current element.
2. Details see [315-count-of-smaller-numbers-after-self.js](./leetcode-js/315-count-of-smaller-numbers-after-self.js).

## 363. Max Sum of Rectangle No Larger Than K

_Given a non-empty 2D matrix matrix and an integer k, find the max sum of a rectangle in the matrix such that its sum is no larger than k._

1. If rows are (much) larger than columns, rotate the matrix.
2. Loop through each row.
    1. In each iteration, loop through each rows after current row (include current).
    2. Maintain an array of sums of each row of current iteration. Covert the problem into finding max sum subarray.
3. To solve max sum subarray:
    1. Maintain a data structure to quickly (`O(log(n))`) find the smallest number that is bigger than or equal to a given number. (In C++, a set will do this.)
    2. Covert sum of subarray into `sum = sums[i2] - sums[i1]` (prefix sum).
    3. Iterate through each prefix sum, for each, find the smallest number (`n`) that is bigger than `sum - k` (so `sum - n` is biggest and not larger than `k`). The finding operation has `O(log(n))` time since we used a set.
    4. Find the biggest `sum - n` in step 3.

## 33. Search in Rotated Sorted Array

_Suppose a sorted array is rotated at some pivot unknown to you beforehand. (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2). You are given a target value to search. If found in the array return its index, otherwise return -1. You may assume no duplicate exists in the array._

1. Can still be solved using binary search.
2. In each iteration:
    1. Determine which part of array is sorted properly.
    2. Compare target with boundary of the sorted part. If target falls in the boundary, focus in this part in next iteration. If not, focus in the other part.
    3. Repeat until found.

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

## 44. Wildcard Matching

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

See [044-wildcard-matching.js](./leetcode-js/044-wildcard-matching.js)

## 140. Word Break II

_Given a string s and a dictionary of words dict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences._

See [140-word-break-ii.js](./leetcode-js/140-word-break-ii.js)

## 214. Shortest Palindrome

_Given a string S, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation._

TODO: KMP

## 336. Palindrome Pairs

_Given a list of unique words. Find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome._

See [336-palindrome-pairs.js](./leetcode-js/336-palindrome-pairs.js)

## 30. Substring with Concatenation of All Words

_You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters._

See [030-substring-with-concatenation-of-all-words.js](./leetcode-js/030-substring-with-concatenation-of-all-words.js)

## 174. Dungeon Game

_The demons had captured the princess (P) and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of M x N rooms laid out in a 2D grid. Our valiant knight (K) was initially positioned in the top-left room and must fight his way through the dungeon to rescue the princess._

_The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately._

_Some of the rooms are guarded by demons, so the knight loses health (negative integers) upon entering these rooms; other rooms are either empty (0's) or contain magic orbs that increase the knight's health (positive integers)._

_In order to reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step._

_Write a function to determine the knight's minimum initial health so that he is able to rescue the princess._

See [174-dungeon-game.js](./leetcode-js/174-dungeon-game.js)

## 76. Minimum Window Substring

_Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n)._

See [076-minimum-window-substring.js](./leetcode-js/076-minimum-window-substring.js)

## 132. Palindrome Partitioning II

_Given a string s, partition s such that every substring of the partition is a palindrome. Return the minimum cuts needed for a palindrome partitioning of s._

See [132-palindrome-partitioning-ii.js](./leetcode-js/132-palindrome-partitioning-ii.js)

## 10. Regular Expression Matching

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

See [010-regular-expression-matching.js](./leetcode-js/010-regular-expression-matching.js)

## 32. Longest Valid Parentheses

_Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring._

See [032-longest-valid-parentheses.js](./leetcode-js/032-longest-valid-parentheses.js)

## 188. Best Time to Buy and Sell Stock IV

_Say you have an array for which the ith element is the price of a given stock on day i. Design an algorithm to find the maximum profit. You may complete at most k transactions._

See [188-best-time-to-buy-and-sell-stock-iv.js](./leetcode-js/188-best-time-to-buy-and-sell-stock-iv.js)

## 97. Interleaving String

_Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2._

See [097-interleaving-string.js](./leetcode-js/097-interleaving-string.js)

## 135. Candy

_There are N children standing in a line. Each child is assigned a rating value. You are giving candies to these children subjected to the following requirements:_

- _Each child must have at least one candy._
- _Children with a higher rating get more candies than their neighbors._

_What is the minimum candies you must give?_

See [135-candy.js](./leetcode-js/135-candy.js)

## 224. Basic Calculator

_Implement a basic calculator to evaluate a simple expression string. The expression string may contain open `(` and closing parentheses `)`, the plus `+` or minus sign `-`, non-negative integers and empty spaces ` `. You may assume that the given expression is always valid._

1. Use [Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation).
2. See [224-basic-calculator.js](./leetcode-js/224-basic-calculator.js).

## 85. Maximal Rectangle

_Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing all ones and return its area._

1. Convert it into [84. Largest Rectangle in Histogram](#84-largest-rectangle-in-histogram).
2. See [085-maximal-rectangle.js](./leetcode-js/085-maximal-rectangle.js).

## 41. First Missing Positive

_Given an unsorted integer array, find the first missing positive integer. Your algorithm should run in O(n) time and uses constant space._

[041-first-missing-positive.js](/leetcode-js/041-first-missing-positive.js).

## 84. Largest Rectangle in Histogram

_Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram._

See [084-largest-rectangle-in-histogram.js](./leetcode-js/084-largest-rectangle-in-histogram.js).

## 45. Jump Game II

_Given an array of non-negative integers, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Your goal is to reach the last index in the minimum number of jumps._

See [045-jump-game-ii.js](./leetcode-js/045-jump-game-ii.js).

## 316. Remove Duplicate Letters

_Given a string which contains only lowercase letters, remove duplicate letters so that every letter appear once and only once. You must make sure your result is the smallest in lexicographical order among all possible results._

See [316-remove-duplicate-letters.js](./leetcode-js/316-remove-duplicate-letters.js)

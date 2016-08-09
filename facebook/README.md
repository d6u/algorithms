# Facebook

## Phone Interview

### 010-regular-expression-matching

- [010-regular-expression-matching.js](../leetcode-js/010-regular-expression-matching.js)
- [010-regular-expression-matching_dp.js](../leetcode-js/010-regular-expression-matching_dp.js) fastest

### Decode Ways

[091-decode-ways.js](../leetcode-js/091-decode-ways.js)

### Remove Invalid Parentheses

[301-remove-invalid-parentheses.js](../leetcode-js/301-remove-invalid-parentheses.js) BFS

[301-remove-invalid-parentheses_no-set.js](../leetcode-js/301-remove-invalid-parentheses_no-set.js) best solution

### strStr

[028-implement-strstr.js](../leetcode-js/028-implement-strstr.js)

### Tree Traversal

[094-binary-tree-inorder-traversal.js](../leetcode-js/094-binary-tree-inorder-traversal.js)
[144-binary-tree-preorder-traversal.js](./leetcode-js/144-binary-tree-preorder-traversal.js)
[145-binary-tree-postorder-traversal.js](../leetcode-js/145-binary-tree-postorder-traversal.js)

### Validate Tree

[098-validate-binary-search-tree.js](../leetcode-js/098-validate-binary-search-tree.js)
[110-balanced-binary-tree.js](../leetcode-js/110-balanced-binary-tree.js)
[261-graph-valid-tree_union-find.js](../leetcode-js/261-graph-valid-tree_union-find.js)

### kth largest element in array

Or 给2D平面上的N个点，求离原点最近的K个点

[215-kth-largest-element-in-an-array.js](../leetcode-js/215-kth-largest-element-in-an-array.js)

### 给一个数字array , 有正有负数。给一个数， 找array中连续的数字，其和是给定的数

[327-count-of-range-sum.js](../leetcode-js/327-count-of-range-sum.js)

### Word Break

- [139-word-break.js](../leetcode-js/139-word-break.js)
- [140-word-break-ii.js](../leetcode-js/140-word-break-ii.js)
- [140-word-break-ii_recursive.js](../leetcode-js/140-word-break-ii_recursive.js) slower

### Wildcard matching

[044-wildcard-matching.js](../leetcode-js/044-wildcard-matching.js)

### Minimum window substring

[076-minimum-window-substring.js](../leetcode-js/076-minimum-window-substring.js)

---

### Find first k common elements in n sorted arrays

[014-longest-common-prefix.js](../leetcode-js/014-longest-common-prefix.js)

Follow up?: common substring

### 给一个partial sorted的数组比如1，3，5，2，4，6，8，10，20，30，11，12，13，数组有N个数，分为M个segment，N>>>M，要求输出排序后的数组。第一反应就是merge k sorted list，按照那个写了下，问了问time 和space 的complexity

TODO

### Number of 1 Bits

[191-number-of-1-bits.js](../leetcode-js/191-number-of-1-bits.js) O(m), m is number of 1 bits

TODO: O(1) solution

### list of sorted integer arrays，要求找所有的数的 median

TODO: [004-median-of-two-sorted-arrays.js](../leetcode-js/004-median-of-two-sorted-arrays.js)

### 自然string comparator。不知道的搜下。就是string 比较的时候考虑里面数字的大小，比如 abc9 < abc123 abc > ab9  因为char比digit重要

---

### Move Zeroes

[283-move-zeroes.js](../leetcode-js/283-move-zeroes.js)

Follow up: 如果只需要把非0的数移到左边，而不care右边是什么数要怎么做。举例 2，0，0，1，3，0，5，输出2，1，3，5，*，*，*，随便*输出什么都可以。

### Merge two arrays in-place

[088-merge-sorted-array.js](../leetcode-js/088-merge-sorted-array.js)

### Sort Colors

[075-sort-colors.js](../leetcode-js/075-sort-colors.js)

### Task Cooldown

给出已经排序好的tasks，计算出一共要多久能执行完所有的task。用hashmap做了出来，
follow up：在这个基础上，已知cooldown会很小，可以视作constant，task的type会很多，让我减少空间复杂度。 用了queue，queue的size和cooldown一样。

- [task-cooldown.js](./task-cooldown.js)
- [task-cooldown-queue.js](./task-cooldown-queue.js)

### 2Sum

[001-two-sum.js](../leetcode-js/001-two-sum.js)

### Combination Sum

给一个正数n，打印出所有相加的组合,例如10可以打印出

1+1+1+...1

1+2+1+...1

...

9+1

10

- [combination-sum.js](./combination-sum.js)
- Follow up [039-combination-sum.js](../leetcode-js/039-combination-sum.js)
- Follow up [040-combination-sum-ii.js](../leetcode-js/040-combination-sum-ii.js)
- Follow up [216-combination-sum-iii.js](../leetcode-js/216-combination-sum-iii.js)

### Search in Rotated Sorted Array

- [033-search-in-rotated-sorted-array.js](../leetcode-js/033-search-in-rotated-sorted-array.js)
- [081-search-in-rotated-sorted-array-ii.js](../leetcode-js/081-search-in-rotated-sorted-array-ii.js)

### Meeting Room

interval [startTime, stoptime)   ----integral  time stamps.
给这样的一串区间 I1, I2......In
找出 一个 time stamp  出现在interval的次数最多。
startTime <= t< stopTime 代表这个数在区间里面出现过。

[253-meeting-rooms-ii.js](../leetcode-js/253-meeting-rooms-ii.js)

### read4k

- [157-read-n-characters-given-read4.js](../leetcode-js/157-read-n-characters-given-read4.js)
- [158-read-n-characters-given-read4-ii-call-multiple-times.js](../leetcode-js/158-read-n-characters-given-read4-ii-call-multiple-times.js)

### Merge sorted array

- [088-merge-sorted-array.js](../leetcode-js/088-merge-sorted-array.js)
- [023-merge-k-sorted-lists.js](../leetcode-js/023-merge-k-sorted-lists.js)
- [021-merge-two-sorted-lists.js](../leetcode-js/021-merge-two-sorted-lists.js)

### Best time to buy and sell stock

- [121-best-time-to-buy-and-sell-stock.js](../leetcode-js/121-best-time-to-buy-and-sell-stock.js)
- [122-best-time-to-buy-and-sell-stock-ii.js](../leetcode-js/122-best-time-to-buy-and-sell-stock-ii.js)

---

# On-site

## Copy List with Random Pointer

[138-copy-list-with-random-pointer.js](../leetcode-js/138-copy-list-with-random-pointer.js)

## Simplify Path

[071-simplify-path.js](../leetcode-js/071-simplify-path.js)

## Phone Letters Combination

[017-letter-combinations-of-a-phone-number.js](../leetcode-js/017-letter-combinations-of-a-phone-number.js)

TODO: need iterative

## 3Sum

[015-3sum.js](../leetcode-js/015-3sum.js)

TODO: need hashmap solution

## Merge Intervals

给出N个序列，比如2个序列A,B,没个序列包含若干的区间，比如
A: [1,5], [10,14], [16,18]
B: [2,6], [8,10], [11,20]

没个序列内的区间没有overlap但是序列之间的区间没有这个限制。请给出solution合并N个序列到一个序列 Final，Final内依然没有overlap的区间。
比如上例 Final就是 [1,6], [8, 20].

[056-merge-intervals.js](../leetcode-js/056-merge-intervals.js)

## Tri-node的题

## 找sorted array中的某个数，用divide & conquer做

## 一道多个pc之间发送和请求数据的设计题

## first bad version 以及变种。 变种是如果不知道一共有多少版本的情况下应该怎么找。

https://www.quora.com/Given-an-array-of-unknown-size-n-how-do-you-find-the-exact-value-of-n-in-O-log-n-time

## Min Queue, 跟Min Stack类似， 实现一个Queue， 然后O（1）复杂度获得这个Queue里最小的元素

## find battleship， 一个N*N的grid, 里面battleship是一个横着或者竖着的一条线（三个格子）， 要找到battleship的坐标。

## binary tree -> circular doubly LinkedList

## Convert a given Binary Tree to Doubly Linked List

http://www.geeksforgeeks.org/in-place-convert-a-given-binary-tree-to-doubly-linked-list/

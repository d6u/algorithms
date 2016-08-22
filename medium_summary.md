# Medium Problem Summary

## String

- [022-generate-parenthesis.java](./leetcode-java/022-generate-parenthesis.java)

    Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

- [320-generalized-abbreviation.java](./leetcode-java/320-generalized-abbreviation.java)

    Write a function to generate the generalized abbreviations of a word. E.g. Given word = "word", return the following list (order does not matter): `["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]`

- [241-different-ways-to-add-parentheses.java](./leetcode-java/241-different-ways-to-add-parentheses.java)

    Given a string of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. The valid operators are +, - and *.

- [backtrack + memorization 10ms](./leetcode-java/294-flip-game-ii.java), [backtrack 200ms](./leetcode-java/294-flip-game-ii_backtrack.java), [dynamic programing + game theory 2ms](./leetcode-java/294-flip-game-ii_dp.java)

    You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner. Write a function to determine if the starting player can guarantee a win.

## DP

- [338-counting-bits.js](./leetcode-js/338-counting-bits.js)

    Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

- [256-paint-house.java](./leetcode-java/256-paint-house.java)

    There are a row of n houses, each house can be painted with one of the three colors: red, blue or green. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.

- [122-best-time-to-buy-and-sell-stock-ii.java](./leetcode-java/122-best-time-to-buy-and-sell-stock-ii.java)

    Say you have an array for which the ith element is the price of a given stock on day i. Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

- [357-count-numbers-with-unique-digits.java](./leetcode-java/357-count-numbers-with-unique-digits.java)

    Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10^n.

- [309-best-time-to-buy-and-sell-stock-with-cooldown.java](./leetcode-java/309-best-time-to-buy-and-sell-stock-with-cooldown.java)

    Say you have an array for which the ith element is the price of a given stock on day i. Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

    - You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
    - After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)

- [064-minimum-path-sum.java](./leetcode-java/064-minimum-path-sum.java)

    Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

- [055-jump-game.java](./leetcode-java/055-jump-game.java)

    Given an array of non-negative integers, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Determine if you are able to reach the last index.

## Linked List

- [369-plus-one-linked-list.java](./leetcode-java/369-plus-one-linked-list.java)

    Given a non-negative number represented as a singly linked list of digits, plus one to the number. The digits are stored such that the most significant digit is at the head of the list.

- [364-nested-list-weight-sum-ii.java](./leetcode-java/364-nested-list-weight-sum-ii.java)

    Given a nested list of integers, return the sum of all integers in the list weighted by their depth. Each element is either an integer, or a list -- whose elements may also be integers or other lists. The weight is defined from bottom up. i.e., the leaf level integers have weight 1, and the root level integers have the largest weight.

- [328-odd-even-linked-list.java](./leetcode-java/328-odd-even-linked-list.java)

    Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes. You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

## Matrix

- [311-sparse-matrix-multiplication.java](./leetcode-java/311-sparse-matrix-multiplication.java)

    Given two sparse matrices A and B, return the result of AB. You may assume that A's column number is equal to B's row number.

- [286-walls-and-gates.js](./leetcode-js/286-walls-and-gates.js)

    You are given a m x n 2D grid initialized with these three possible values.

    - -1 - A wall or an obstacle.
    - 0 - A gate.
    - INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.

    Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

- [079-word-search.java](./leetcode-java/079-word-search.java)

    Given a 2D board and a word, find if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

## Math

- [343-integer-break.java](./leetcode-java/343-integer-break.java)

    Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

- [319-bulb-switcher.java](./leetcode-java/319-bulb-switcher.java)

    There are n bulbs that are initially off. You first turn on all the bulbs. Then, you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb. Find how many bulbs are on after n rounds.

- [012-integer-to-roman.java](./leetcode-java/012-integer-to-roman.java)

    Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

## Bitwise

- [136-single-number.js](./leetcode-js/136-single-number.js)

    Given an array of integers, every element appears twice except for one. Find that single one.

- [260-single-number-iii.js](./leetcode-js/260-single-number-iii.js)

    Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

- [137-single-number-ii.java](./leetcode-java/137-single-number-ii.java)

    Given an array of integers, every element appears three times except for one. Find that single one.

---

- [059-spiral-matrix-ii.js](./leetcode-js/059-spiral-matrix-ii.js)

    Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

- [281-zigzag-iterator.js](./leetcode-js/281-zigzag-iterator.js)
- [351-android-unlock-patterns.js](./leetcode-js/351-android-unlock-patterns.js)
- [089-gray-code.js](./leetcode-js/089-gray-code.js)
- [046-permutations.js](./leetcode-js/046-permutations.js)
- [062-unique-paths.js](./leetcode-js/062-unique-paths.js)
- [053-maximum-subarray.js](./leetcode-js/053-maximum-subarray.js)
- [153-find-mim-in-rotated-array.js](./leetcode-js/153-find-mim-in-rotated-array.js)
- [254-factor-combination.js](./leetcode-js/254-factor-combination.js)
- [367-valid-perfect-square.js](./leetcode-js/367-valid-perfect-square.js)
- [253-meeting-rooms-ii.js](./leetcode-js/253-meeting-rooms-ii.js)
- [240-search-a-2d-matrix-ii.js](./leetcode-js/240-search-a-2d-matrix-ii.js)
- [077-combinations.js](./leetcode-js/077-combinations.js)
- [313-super-ugly-number.js](./leetcode-js/313-super-ugly-number.js)
- [334-increasing-triplet-subsequence.js](./leetcode-js/334-increasing-triplet-subsequence.js)
- [300-longest-increasing-subsequence.js](./leetcode-js/300-longest-increasing-subsequence.js)
- [247-strobogrammatic-number-ii.js](./leetcode-js/247-strobogrammatic-number-ii.js)
- [048-rotate-image.js](./leetcode-js/048-rotate-image.js)
- [251-flatten-2d-vector.js](./leetcode-js/251-flatten-2d-vector.js)
- [075-sort-colors.js](./leetcode-js/075-sort-colors.js)
- [289-game-of-life.js](./leetcode-js/289-game-of-life.js)
- [011-container-with-most-water.js](./leetcode-js/011-container-with-most-water.js)
- [277-find-the-celebrity.js](./leetcode-js/277-find-the-celebrity.js)
- [361-bomb-enemy.js](./leetcode-js/361-bomb-enemy.js)
- [244-shortest-word-distance-ii.js](./leetcode-js/244-shortest-word-distance-ii.js)
- [215-kth-largest-element-in-an-array.js](./leetcode-js/215-kth-largest-element-in-an-array.js)
- [074-search-matrix.js](./leetcode-js/074-search-matrix.js)
- [073-set-matrix-zeroes.js](./leetcode-js/073-set-matrix-zeroes.js)
- [279-perfect-squares.js](./leetcode-js/279-perfect-squares.js)
- [279-perfect-squares_math.js](./leetcode-js/279-perfect-squares_math.js)
- [080-remove-duplicate-from-sorted-array-ii.js](./leetcode-js/080-remove-duplicate-from-sorted-array-ii.js)
- [078-subsets.js](./leetcode-js/078-subsets.js)
- [331-verify-preorder-serialization-of-a-binary-tree.js](./leetcode-js/331-verify-preorder-serialization-of-a-binary-tree.js)
- [341-flatten-nested-list-iterator.js](./leetcode-js/341-flatten-nested-list-iterator.js)
- [275-h-index-ii.js](./leetcode-js/275-h-index-ii.js)
- [039-combination-sum.js](./leetcode-js/039-combination-sum.js)
- [314-binary-tree-vertical-order-traversal.js](./leetcode-js/314-binary-tree-vertical-order-traversal.js)
- [081-search-in-rotated-sorted-array-ii.js](./leetcode-js/081-search-in-rotated-sorted-array-ii.js)
- [201-bitwise-and-of-numbers-range.js](./leetcode-js/201-bitwise-and-of-numbers-range.js)
- [090-subsets-ii.js](./leetcode-js/090-subsets-ii.js)
- [213-house-robber-ii.js](./leetcode-js/213-house-robber-ii.js)
- [109-convert-sorted-list-to-binary-search-tree.js](./leetcode-js/109-convert-sorted-list-to-binary-search-tree.js)
- [142-linked-list-cycle-ii.js](./leetcode-js/142-linked-list-cycle-ii.js)
- [120-triangle.js](./leetcode-js/120-triangle.js)
- [368-largest-divisible-subset.js](./leetcode-js/368-largest-divisible-subset.js)
- [274-h-index.js](./leetcode-js/274-h-index.js)
- [147-insertion-sort-list.js](./leetcode-js/147-insertion-sort-list.js)
- [086-partition-list.js](./leetcode-js/086-partition-list.js)
- [163-missing-ranges.js](./leetcode-js/163-missing-ranges.js)
- [017-letter-combinations-of-a-phone-number.js](./leetcode-js/017-letter-combinations-of-a-phone-number.js)
- [063-unique-paths-ii.js](./leetcode-js/063-unique-paths-ii.js)
- [264-ugly-number-ii.js](./leetcode-js/264-ugly-number-ii.js)
- [200-number-of-islands.js](./leetcode-js/200-number-of-islands.js)
- [267-palindrome-permutation-ii.js](./leetcode-js/267-palindrome-permutation-ii.js)
- [161-one-edit-distance.js](./leetcode-js/161-one-edit-distance.js)
- [049-group-anagrams.js](./leetcode-js/049-group-anagrams.js)
- [047-permutations-ii.js](./leetcode-js/047-permutations-ii.js)
- [186-reverse-words-in-a-string-ii.js](./leetcode-js/186-reverse-words-in-a-string-ii.js)
- [131-palindrome-partitioning.js](./leetcode-js/131-palindrome-partitioning.js)
- [092-reverse-linked-list-ii.js](./leetcode-js/092-reverse-linked-list-ii.js)
- [356-line-reflection.js](./leetcode-js/356-line-reflection.js)
- [134-gas-station.js](./leetcode-js/134-gas-station.js)
- [082-remove-duplicates-from-sorted-list-ii.js](./leetcode-js/082-remove-duplicates-from-sorted-list-ii.js)
- [050-pow-x-n.js](./leetcode-js/050-pow-x-n.js)
- [271-encode-and-decode-strings.js](./leetcode-js/271-encode-and-decode-strings.js)
- [187-repeated-dna-sequences.js](./leetcode-js/187-repeated-dna-sequences.js)
- [306-additive-number.js](./leetcode-js/306-additive-number.js)
- [227-basic-calculator-ii.js](./leetcode-js/227-basic-calculator-ii.js)
- [139-word-break.js](./leetcode-js/139-word-break.js)
- [069-sqrt-x.js](./leetcode-js/069-sqrt-x.js)
- [060-permutation-sequence.js](./leetcode-js/060-permutation-sequence.js)
- [148-sort-list.js](./leetcode-js/148-sort-list.js)
- [322-coin-change.js](./leetcode-js/322-coin-change.js)
- [208-implement-trie.js](./leetcode-js/208-implement-trie.js)
- [221-maximum-square.js](./leetcode-js/221-maximum-square.js)
- [150-evaluate-reverse-polish-notation.js](./leetcode-js/150-evaluate-reverse-polish-notation.js)
- [043-multiply-strings.js](./leetcode-js/043-multiply-strings.js)
- [002-add-two-numbers.js](./leetcode-js/002-add-two-numbers.js)
- [093-restore-ip-addresses.js](./leetcode-js/093-restore-ip-addresses.js)
- [324-wiggle-sort-ii.js](./leetcode-js/324-wiggle-sort-ii.js)
- [335-self-crossing.js](./leetcode-js/335-self-crossing.js)
- [005-longest-palindromic-substring.js](./leetcode-js/005-longest-palindromic-substring.js)
- [143-reorder-list.js](./leetcode-js/143-reorder-list.js)
- [061-rotate-list.js](./leetcode-js/061-rotate-list.js)
- [054-spiral-matrix.js](./leetcode-js/054-spiral-matrix.js)
- [365-water-and-jug-problem.js](./leetcode-js/365-water-and-jug-problem.js)
- [003-longest-substring-without-repeating-characters.js](./leetcode-js/003-longest-substring-without-repeating-characters.js)
- [071-simplify-path.js](./leetcode-js/071-simplify-path.js)
- [304-range-sum-query-2d-immutable.js](./leetcode-js/304-range-sum-query-2d-immutable.js)
- [179-largest-number.js](./leetcode-js/179-largest-number.js)
- [127-word-ladder.js](./leetcode-js/127-word-ladder.js)
- [091-decode-ways.js](./leetcode-js/091-decode-ways.js)
- [130-surrounded-regions.js](./leetcode-js/130-surrounded-regions.js)
- [166-fraction-to-recurring-decimal.js](./leetcode-js/166-fraction-to-recurring-decimal.js)
- [029-divide-two-integers.js](./leetcode-js/029-divide-two-integers.js)
- [151-reverse-words-in-a-string.js](./leetcode-js/151-reverse-words-in-a-string.js)
- [348](.348)
- [362](.362)
- [382](.382)
- [384](.384)
- [360](.360)
- [318](.318)
- [377](.377)
- [378](.378)
- [376](.376)
- [284](.284)
- [372](.372)
- [375](.375)
- [373](.373)
- [385](.385)
- [379](.379)
- [355](.355)
- [211](.211)
- [307](.307)


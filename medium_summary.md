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

- [247-strobogrammatic-number-ii.java](./leetcode-java/247-strobogrammatic-number-ii.java)

    A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down). Find all strobogrammatic numbers that are of length = n.

- 005-longest-palindromic-substring: [dp](./leetcode-java/005-longest-palindromic-substring_dp.java), [normal](./leetcode-java/005-longest-palindromic-substring.java)

    Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.

- [017-letter-combinations-of-a-phone-number.java](./leetcode-java/017-letter-combinations-of-a-phone-number.java)

    Given a digit string, return all possible letter combinations that the number could represent.

- [043-multiply-strings.java](./leetcode-java/043-multiply-strings.java)

    Given two numbers represented as strings, return multiplication of the numbers as a string.

    - The numbers can be arbitrarily large and are non-negative.
    - Converting the input string to integer is NOT allowed.
    - You should NOT use internal library such as BigInteger.

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

- **Review** [279-perfect-squares_math.java](../leetcode-java/279-perfect-squares_math.java)

    [leetcode discuss](https://discuss.leetcode.com/topic/24255/summary-of-4-different-solutions-bfs-dp-static-dp-and-mathematics)

    Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n. For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.

- **Review** [351-android-unlock-patterns.java](./leetcode-java/351-android-unlock-patterns.java)

    Given an Android 3x3 key lock screen and two integers m and n, where 1 ≤ m ≤ n ≤ 9, count the total number of unlock patterns of the Android lock screen, which consist of minimum of m keys and maximum n keys.

    - Each pattern must connect at least m keys and at most n keys.
    - All the keys must be distinct.
    - If the line connecting two consecutive keys in the pattern passes through any other keys, the other keys must have previously selected in the pattern. No jumps through non selected key is allowed.
    - The order of keys used matters.

- [264-ugly-number-ii.java](./leetcode-java/264-ugly-number-ii.java)

    Write a program to find the n-th ugly number. Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers. Note that 1 is typically treated as an ugly number.

- [313-super-ugly-number.java](./leetcode-java/313-super-ugly-number.java)

    Write a program to find the nth super ugly number. Super ugly numbers are positive numbers whose all prime factors are in the given prime list primes of size k. For example, [1, 2, 4, 7, 8, 13, 14, 16, 19, 26, 28, 32] is the sequence of the first 12 super ugly numbers given primes = [2, 7, 13, 19] of size 4.

    - 1 is a super ugly number for any given primes.
    - The given numbers in primes are in ascending order.
    - 0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i] < 1000.

## Linked List

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

- [240-search-a-2d-matrix-ii.java](./leetcode-java/240-search-a-2d-matrix-ii.java)

    Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

    - Integers in each row are sorted in ascending from left to right.
    - Integers in each column are sorted in ascending from top to bottom.

- [361-bomb-enemy.java](./leetcode-java/361-bomb-enemy.java)

    Given a 2D grid, each cell is either a wall 'W', an enemy 'E' or empty '0' (the number zero), return the maximum enemies you can kill using one bomb. The bomb kills all the enemies in the same row and column from the planted point until it hits the wall since the wall is too strong to be destroyed. Note that you can only put the bomb at an empty cell.

## Math

- [343-integer-break.java](./leetcode-java/343-integer-break.java)

    Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

- [319-bulb-switcher.java](./leetcode-java/319-bulb-switcher.java)

    There are n bulbs that are initially off. You first turn on all the bulbs. Then, you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb. Find how many bulbs are on after n rounds.

- [012-integer-to-roman.java](./leetcode-java/012-integer-to-roman.java)

    Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

- **Review** [254-factor-combination.java](./leetcode-java/254-factor-combination.java)

    Numbers can be regarded as product of its factors. Write a function that takes an integer n and return all possible combinations of its factors.

- [367-valid-perfect-square.java](../leetcode-java/367-valid-perfect-square.java)

    Given a positive integer num, write a function which returns True if num is a perfect square else False. Note: Do not use any built-in library function such as sqrt.

- [029-divide-two-integers.js](./leetcode-js/029-divide-two-integers.js)

    Divide two integers without using multiplication, division and mod operator. If it is overflow, return MAX_INT.

## Bitwise

- [136-single-number.js](./leetcode-js/136-single-number.js)

    Given an array of integers, every element appears twice except for one. Find that single one.

- [260-single-number-iii.js](./leetcode-js/260-single-number-iii.js)

    Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

- [137-single-number-ii.java](./leetcode-java/137-single-number-ii.java)

    Given an array of integers, every element appears three times except for one. Find that single one.

- [089-gray-code.java](./leetcode-java/089-gray-code.java)

    The gray code is a binary numeral system where two successive values differ in only one bit. Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

---

- [059-spiral-matrix-ii.js](./leetcode-js/059-spiral-matrix-ii.js)

    Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

- [166-fraction-to-recurring-decimal.java](./leetcode-java/166-fraction-to-recurring-decimal.java)

    Given two integers representing the numerator and denominator of a fraction, return the fraction in string format. If the fractional part is repeating, enclose the repeating part in parentheses.

- [147-insertion-sort-list.java](./leetcode-java/147-insertion-sort-list.java)

    Sort a linked list using insertion sort.

- [179-largest-number.java](./leetcode-java/179-largest-number.java)

    Given a list of non negative integers, arrange them such that they form the largest number. For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330. Note: The result may be very large, so you need to return a string instead of an integer.

- [047-permutations-ii.js](./leetcode-js/047-permutations-ii.js)
- [050-pow-x-n.js](./leetcode-js/050-pow-x-n.js)
- [060-permutation-sequence.js](./leetcode-js/060-permutation-sequence.js)
- [061-rotate-list.js](./leetcode-js/061-rotate-list.js)
- [069-sqrt-x.js](./leetcode-js/069-sqrt-x.js)
- [071-simplify-path.js](./leetcode-js/071-simplify-path.js)
- [082-remove-duplicates-from-sorted-list-ii.js](./leetcode-js/082-remove-duplicates-from-sorted-list-ii.js)
- [086-partition-list.js](./leetcode-js/086-partition-list.js)
- [091-decode-ways.js](./leetcode-js/091-decode-ways.js)
- [092-reverse-linked-list-ii.js](./leetcode-js/092-reverse-linked-list-ii.js)
- [093-restore-ip-addresses.js](./leetcode-js/093-restore-ip-addresses.js)
- [109-convert-sorted-list-to-binary-search-tree.js](./leetcode-js/109-convert-sorted-list-to-binary-search-tree.js)
- [127-word-ladder.js](./leetcode-js/127-word-ladder.js)
- [130-surrounded-regions.js](./leetcode-js/130-surrounded-regions.js)
- [131-palindrome-partitioning.js](./leetcode-js/131-palindrome-partitioning.js)
- [134-gas-station.js](./leetcode-js/134-gas-station.js)
- [139-word-break.js](./leetcode-js/139-word-break.js)
- [142-linked-list-cycle-ii.js](./leetcode-js/142-linked-list-cycle-ii.js)
- [143-reorder-list.js](./leetcode-js/143-reorder-list.js)
- [150-evaluate-reverse-polish-notation.js](./leetcode-js/150-evaluate-reverse-polish-notation.js)


- [151-reverse-words-in-a-string.js](./leetcode-js/151-reverse-words-in-a-string.js)
- [161-one-edit-distance.js](./leetcode-js/161-one-edit-distance.js)
- [186-reverse-words-in-a-string-ii.js](./leetcode-js/186-reverse-words-in-a-string-ii.js)
- [200-number-of-islands.js](./leetcode-js/200-number-of-islands.js)
- [201-bitwise-and-of-numbers-range.js](./leetcode-js/201-bitwise-and-of-numbers-range.js)
- [208-implement-trie.js](./leetcode-js/208-implement-trie.js)
- [213-house-robber-ii.js](./leetcode-js/213-house-robber-ii.js)
- [221-maximum-square.js](./leetcode-js/221-maximum-square.js)
- [227-basic-calculator-ii.js](./leetcode-js/227-basic-calculator-ii.js)
- [267-palindrome-permutation-ii.js](./leetcode-js/267-palindrome-permutation-ii.js)
- [271-encode-and-decode-strings.js](./leetcode-js/271-encode-and-decode-strings.js)
- [275-h-index-ii.js](./leetcode-js/275-h-index-ii.js)
- [304-range-sum-query-2d-immutable.js](./leetcode-js/304-range-sum-query-2d-immutable.js)
- [306-additive-number.js](./leetcode-js/306-additive-number.js)
- [322-coin-change.js](./leetcode-js/322-coin-change.js)
- [324-wiggle-sort-ii.js](./leetcode-js/324-wiggle-sort-ii.js)
- [335-self-crossing.js](./leetcode-js/335-self-crossing.js)
- [341-flatten-nested-list-iterator.js](./leetcode-js/341-flatten-nested-list-iterator.js)
- [365-water-and-jug-problem.js](./leetcode-js/365-water-and-jug-problem.js)
- [368-largest-divisible-subset.js](./leetcode-js/368-largest-divisible-subset.js)


- [211](.211)
- [284](.284)
- [307](.307)
- [318](.318)
- [348](.348)
- [355](.355)
- [360](.360)
- [362](.362)
- [372](.372)
- [373](.373)
- [375](.375)
- [376](.376)
- [377](.377)
- [378](.378)
- [379](.379)
- [382](.382)
- [384](.384)
- [385](.385)

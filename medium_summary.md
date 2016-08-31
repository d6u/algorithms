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

- [071-simplify-path.java](./leetcode-java/071-simplify-path.java)

    Given an absolute path for a file (Unix-style), simplify it.

- **Review** [091-decode-ways.java](./leetcode-java/091-decode-ways.java)

    A message containing letters from A-Z is being encoded to numbers using the following mapping:

    ```
    'A' -> 1
    'B' -> 2
    ...
    'Z' -> 26
    ```

    Given an encoded message containing digits, determine the total number of ways to decode it.

- [093-restore-ip-addresses.java](./leetcode-java/093-restore-ip-addresses.java)

    Given a string containing only digits, restore it by returning all possible valid IP address combinations.

- [127-word-ladder.java](./leetcode-java/127-word-ladder.java)

    Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

    - Only one letter can be changed at a time
    - Each intermediate word must exist in the word list

- [131-palindrome-partitioning.java](./leetcode-java/131-palindrome-partitioning.java)

    Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

- [139-word-break.java](./leetcode-java/139-word-break.java)

    Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

- [150-evaluate-reverse-polish-notation.java](./leetcode-java/150-evaluate-reverse-polish-notation.java)

    Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, /. Each operand may be an integer or another expression.

- [151-reverse-words-in-a-string.java](./leetcode-java/151-reverse-words-in-a-string.java)

    Given an input string, reverse the string word by word.

- [161-one-edit-distance.java](./leetcode-java/161-one-edit-distance.java)

    Given two strings S and T, determine if they are both one edit distance apart.

- [186-reverse-words-in-a-string-ii.java](./leetcode-java/186-reverse-words-in-a-string-ii.java)

    Given an input string, reverse the string word by word. A word is defined as a sequence of non-space characters. The input string does not contain leading or trailing spaces and the words are always separated by a single space.Could you do it in-place without allocating extra space?

- **Review** 227-basic-calculator-ii: [normal](./leetcode-java/227-basic-calculator-ii.java), [rpn](./leetcode-java/227-basic-calculator-ii_rpn.java)

    [Shunting yard algorithm](https://en.wikipedia.org/wiki/Shunting-yard_algorithm)

    Implement a basic calculator to evaluate a simple expression string. The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

- [267-palindrome-permutation-ii.java](./leetcode-java/267-palindrome-permutation-ii.java)

    Given a string s, return all the palindromic permutations (without duplicates) of it. Return an empty list if no palindromic permutation could be form.

- [271-encode-and-decode-strings.java](./leetcode-java/271-encode-and-decode-strings.java)

    Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

    - The string may contain any possible characters out of 256 valid ascii characters. Your algorithm should be generalized enough to work on any possible characters.
    - Do not use class member/global/static variables to store states. Your encode and decode algorithms should be stateless.
    - Do not rely on any library method such as eval or serialize methods. You should implement your own encode/decode algorithm.

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

- [134-gas-station.java](./leetcode-java/134-gas-station.java)

    There are N gas stations along a circular route, where the amount of gas at station i is gas[i]. You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations. Return the starting gas station's index if you can travel around the circuit once, otherwise return -1.

- [213-house-robber-ii.java](./leetcode-java/213-house-robber-ii.java)

    You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

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

- [130-surrounded-regions.java](./leetcode-java/130-surrounded-regions.java)

    Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'. A region is captured by flipping all 'O's into 'X's in that surrounded region.

- [200-number-of-islands.java](./leetcode-java/200-number-of-islands.java)

    Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

- [221-maximum-square.java](./leetcode-java/221-maximum-square.java)

    Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

- [304-range-sum-query-2d-immutable.java](./leetcode-java/304-range-sum-query-2d-immutable.java)

    Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

    - You may assume that the matrix does not change.
    - There are many calls to sumRegion function.
    - You may assume that row1 ≤ row2 and col1 ≤ col2.

- [348-design-tic-tac-toe.java](./leetcode-java/348-design-tic-tac-toe.java)

    Design a Tic-tac-toe game that is played between two players on a n x n grid. You may assume the following rules:

    - A move is guaranteed to be valid and is placed on an empty block.
    - Once a winning condition is reached, no more moves is allowed.
    - A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.

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

- [050-pow-x-n.java](./leetcode-java/050-pow-x-n.java)

    Implement pow(x, n).

- **Review** 069-sqrt-x: [Newton's method](./leetcode-java/069-sqrt-x.java), [binary search](./leetcode-java/069-sqrt-x_binary-search.java)

    Implement int sqrt(int x). Compute and return the square root of x.

- [365-water-and-jug-problem.java](./leetcode-java/365-water-and-jug-problem.java)

    You are given two jugs with capacities x and y litres. There is an infinite amount of water supply available. You need to determine whether it is possible to measure exactly z litres using these two jugs.

## Bitwise

- [136-single-number.js](./leetcode-js/136-single-number.js)

    Given an array of integers, every element appears twice except for one. Find that single one.

- [260-single-number-iii.js](./leetcode-js/260-single-number-iii.js)

    Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

- [137-single-number-ii.java](./leetcode-java/137-single-number-ii.java)

    Given an array of integers, every element appears three times except for one. Find that single one.

- [089-gray-code.java](./leetcode-java/089-gray-code.java)

    The gray code is a binary numeral system where two successive values differ in only one bit. Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

- [201-bitwise-and-of-numbers-range.java](./leetcode-java/201-bitwise-and-of-numbers-range.java)

    Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

- [318-maximum-product-of-word-lengths.java](./leetcode-java/318-maximum-product-of-word-lengths.java)

    Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

---

- [059-spiral-matrix-ii.js](./leetcode-js/059-spiral-matrix-ii.js)

    Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

- [166-fraction-to-recurring-decimal.java](./leetcode-java/166-fraction-to-recurring-decimal.java)

    Given two integers representing the numerator and denominator of a fraction, return the fraction in string format. If the fractional part is repeating, enclose the repeating part in parentheses.

- [147-insertion-sort-list.java](./leetcode-java/147-insertion-sort-list.java)

    Sort a linked list using insertion sort.

- [179-largest-number.java](./leetcode-java/179-largest-number.java)

    Given a list of non negative integers, arrange them such that they form the largest number. For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330. Note: The result may be very large, so you need to return a string instead of an integer.

- [060-permutation-sequence.java](./leetcode-java/060-permutation-sequence.java)

    The set [1,2,3,…,n] contains a total of n! unique permutations.

    By listing and labeling all of the permutations in order,
    We get the following sequence (ie, for n = 3):

    "123"
    "132"
    "213"
    "231"
    "312"
    "321"
    Given n and k, return the kth permutation sequence.

    Note: Given n will be between 1 and 9 inclusive.

- [306-additive-number.java](./leetcode-java/306-additive-number.java)

    Additive number is a string whose digits can form additive sequence. A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two. Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.

---

- **Review** [355-design-twitter.java](./leetcode-java/355-design-twitter.java)

    Design a simplified version of Twitter where users can post tweets, follow/unfollow another user and is able to see the 10 most recent tweets in the user's news feed. Your design should support the following methods:

    - `postTweet(userId, tweetId)`: Compose a new tweet.
    - `getNewsFeed(userId)`: Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
    - `follow(followerId, followeeId)`: Follower follows a followee.
    - `unfollow(followerId, followeeId)`: Follower unfollows a followee.

- [360-sort-transformed-array.java](./leetcode-java/360-sort-transformed-array.java)

    Given a sorted array of integers nums and integer values a, b and c. Apply a function of the form f(x) = ax2 + bx + c to each element x in the array. The returned array must be in sorted order. Expected time complexity: O(n)

- [362-design-hit-counter.java](./leetcode-java/362-design-hit-counter.java)

    Design a hit counter which counts the number of hits received in the past 5 minutes.

    Each function accepts a timestamp parameter (in seconds granularity) and you may assume that calls are being made to the system in chronological order (ie, the timestamp is monotonically increasing). You may assume that the earliest timestamp starts at 1.

    It is possible that several hits arrive roughly at the same time.

- [372-super-pow.java](./leetcode-java/372-super-pow.java)

    Your task is to calculate ab mod 1337 where a is a positive integer and b is an extremely large positive integer given in the form of an array.


- [373-find-k-pairs-with-smallest-sums.java](./leetcode-java/373-find-k-pairs-with-smallest-sums.java)

    You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k. Define a pair (u,v) which consists of one element from the first array and one element from the second array. Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.

- [375-guess-number-higher-or-lower-ii.java](./leetcode-java/375-guess-number-higher-or-lower-ii.java)

    We are playing the Guess Game. The game is as follows:

    I pick a number from 1 to n. You have to guess which number I picked. Every time you guess wrong, I'll tell you whether the number I picked is higher or lower. However, when you guess a particular number x, and you guess wrong, you pay $x. You win the game when you guess the number I picked.

- [376-wiggle-subsequence.java](./leetcode-java/376-wiggle-subsequence.java)

    A sequence of numbers is called a wiggle sequence if the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with fewer than two elements is trivially a wiggle sequence.

    For example, [1,7,4,9,2,5] is a wiggle sequence because the differences (6,-3,5,-7,3) are alternately positive and negative. In contrast, [1,4,7,2,5] and [1,7,4,5,5] are not wiggle sequences, the first because its first two differences are positive and the second because its last difference is zero.

    Given a sequence of integers, return the length of the longest subsequence that is a wiggle sequence. A subsequence is obtained by deleting some number of elements (eventually, also zero) from the original sequence, leaving the remaining elements in their original order.

- [377-combination-sum-iv.java](./leetcode-java/377-combination-sum-iv.java)

    Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.

- [378-kth-smallest-element-in-a-sorted-matrix.java](./leetcode-java/378-kth-smallest-element-in-a-sorted-matrix.java)

    Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix. Note that it is the kth smallest element in the sorted order, not the kth distinct element.

- [379-design-phone-directory.java](./leetcode-java/379-design-phone-directory.java)

    Design a Phone Directory which supports the following operations:

    - get: Provide a number which is not assigned to anyone.
    - check: Check if a number is available or not.
    - release: Recycle or release a number.

- [382-linked-list-random-node.java](./leetcode-java/382-linked-list-random-node.java)

    Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.

    Follow up: What if the linked list is extremely large and its length is unknown to you? Could you solve this efficiently without using extra space?

- [384-shuffl-an-array.java](./leetcode-java/384-shuffl-an-array.java)

    Shuffle a set of numbers without duplicates.

- [385-mini-parser.java](/leetcode-java/385-mini-parser.java)

    Given a nested list of integers represented as a string, implement a parser to deserialize it. Each element is either an integer, or a list -- whose elements may also be integers or other lists.

    Note: You may assume that the string is well-formed:

    String is non-empty.
    String does not contain white spaces.
    String contains only digits 0-9, [, - ,, ].

- [386-lexicographical-numbers]

    Given an integer n, return 1 - n in lexicographical order.

    For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].

    Please optimize your algorithm to use less time and space. The input size may be as large as 5,000,000.

- [388-longest-absolute-file-path]

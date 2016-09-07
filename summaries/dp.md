# DP

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

- 279-perfect-squares_math: [dp](/leetcode-java/279-perfect-squares.java), [math](../leetcode-java/279-perfect-squares_math.java)

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

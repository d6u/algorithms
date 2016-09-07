# Medium Problem Summary

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

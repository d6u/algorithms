# Array & Hashmap

## Binary search

- **Review** [034-search-for-a-range.java](../leetcode-java/034-search-for-a-range.java)

    Given a sorted array of integers, find the starting and ending position of a given target value. Your algorithm's runtime complexity must be in the order of O(log n). If the target is not found in the array, return [-1, -1].

- [035-search-insert-position.java](../leetcode-java/035-search-insert-position.java)

    Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

## Subarray sum or elements sum

- [325-maximum-size-subarray-sum-equals-k.js](../leetcode-js/325-maximum-size-subarray-sum-equals-k.js)

    Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

- [167-two-sum-ii-input-array-is-sorted.java](../leetcode-java/167-two-sum-ii-input-array-is-sorted.java)

    Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number. The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based. You may assume that each input would have exactly one solution.

- [015-3sum.java](../leetcode-java/015-3sum.java)

    Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

- [259-3sum-smaller.java](../leetcode-java/259-3sum-smaller.java)

    Given an array of n integers nums and a target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

- [216-combination-sum-iii.java](../leetcode-java/216-combination-sum-iii.java)

    Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

- [040-combination-sum-ii.java](../leetcode-java/040-combination-sum-ii.java)

    Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T. Each number in C may only be used once in the combination.

    - All numbers (including target) will be positive integers.
    - The solution set must not contain duplicate combinations.

- **Review** [016-3sum-closest.java](../leetcode-java/016-3sum-closest.java)

    Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

- **Review** [209-minimum-size-subarray-sum.java](../leetcode-java/209-minimum-size-subarray-sum.java)

    Given an array of n positive integers and a positive integer s, find the minimal length of a subarray of which the sum ≥ s. If there isn't one, return 0 instead.

- [018-4sum.java](../leetcode-java/018-4sum.java)

    Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

- [152-maximum-product-subarray.java](../leetcode-java/152-maximum-product-subarray.java)

    Find the contiguous subarray within an array (containing at least one number) which has the largest product.

## Duplicate or almost duplicate elements

- **Review** [220-contains-duplicate-iii.java](../leetcode-java/220-contains-duplicate-iii.java)

    Given an array of integers, find out whether there are two distinct indices i and j in the array such that the difference between nums[i] and nums[j] is at most t and the difference between i and j is at most k.

- [347-top-k-frequent-elements.java](../leetcode-java/347-top-k-frequent-elements.java)

    Given a non-empty array of integers, return the k most frequent elements.

- [245-shortest-word-distance-iii.java](../leetcode-java/245-shortest-word-distance-iii.java)

    Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list. word1 and word2 may be the same and they represent two individual words in the list.

- [268-missing-number.js](../leetcode-js/268-missing-number.js)

    Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

- [229-majority-element-ii.java](../leetcode-java/229-majority-element-ii.java)

    Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times. The algorithm should run in linear time and in O(1) space.

## Transform

- [162-find-peak-element.js](../leetcode-js/162-find-peak-element.js)

    A peak element is an element that is greater than its neighbors. Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

- [280-wiggle-sort.java](../leetcode-java/280-wiggle-sort.java)

    Given an unsorted array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3].... For example, given nums = [3, 5, 2, 1, 6, 4], one possible answer is [1, 6, 2, 5, 3, 4].

- [370-range-addition.java](../leetcode-java/370-range-addition.java)

    Assume you have an array of length n initialized with all 0's and are given k update operations. Each operation is represented as a triplet: `[startIndex, endIndex, inc]` which increments each element of subarray `A[startIndex ... endIndex]` `(startIndex and endIndex inclusive)` with `inc`. Return the modified array after all `k` operations were executed.

- [238-product-of-array-except-self.java](../leetcode-java/238-product-of-array-except-self.java)

    Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

- **Review** [031-next-permutation.java](../leetcode-java/031-next-permutation.java)

    Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers. If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order). The replacement must be in-place, do not allocate extra memory.

- [228-summary-ranges.java](../leetcode-java/228-summary-ranges.java)

    Given a sorted integer array without duplicates, return the summary of its ranges.

---

- [062-unique-paths.java](../leetcode-java/062-unique-paths.java)

    A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below). The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below). How many possible unique paths are there?

- [053-maximum-subarray.java](../leetcode-java/053-maximum-subarray.java)

    Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

- [153-find-mim-in-rotated-array.java](../leetcode-java/153-find-mim-in-rotated-array.java)

    Suppose a sorted array is rotated at some pivot unknown to you beforehand. Find the minimum element. You may assume no duplicate exists in the array.

- [048-rotate-image.java](../leetcode-java/048-rotate-image.java)

    You are given an n x n 2D matrix representing an image. Rotate the image by 90 degrees (clockwise).

- [075-sort-colors.java](../leetcode-java/075-sort-colors.java)

    Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue. Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

- [289-game-of-life.java](../leetcode-java/289-game-of-life.java)

    According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

    Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

    - Any live cell with fewer than two live neighbors dies, as if caused by under-population.
    - Any live cell with two or three live neighbors lives on to the next generation.
    - Any live cell with more than three live neighbors dies, as if by over-population..
    - Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

    Write a function to compute the next state (after one update) of the board given its current state.

- [277-find-the-celebrity.java](../leetcode-java/277-find-the-celebrity.java)

    Suppose you are at a party with n people (labeled from 0 to n - 1) and among them, there may exist one celebrity. The definition of a celebrity is that all the other n - 1 people know him/her but he/she does not know any of them.

    Now you want to find out who the celebrity is or verify that there is not one. The only thing you are allowed to do is to ask questions like: "Hi, A. Do you know B?" to get information of whether A knows B. You need to find out the celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).

    You are given a helper function bool knows(a, b) which tells you whether A knows B. Implement a function int findCelebrity(n), your function should minimize the number of calls to knows.

- [011-container-with-most-water.java](../leetcode-java/011-container-with-most-water.java)

    Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

- **Review** [074-search-matrix.java](../leetcode-java/074-search-matrix.java)

    Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

    - Integers in each row are sorted from left to right.
    - The first integer of each row is greater than the last integer of the previous row.

- [073-set-matrix-zeroes.java](../leetcode-java/073-set-matrix-zeroes.java)

    Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

- [054-spiral-matrix.java](../leetcode-java/054-spiral-matrix.java)

    Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

- [063-unique-paths-ii.java](../leetcode-java/063-unique-paths-ii.java)

    Follow up for "Unique Paths": Now consider if some obstacles are added to the grids. How many unique paths would there be? An obstacle and empty space is marked as 1 and 0 respectively in the grid.

- [163-missing-ranges.java](../leetcode-java/163-missing-ranges.java)

    Given a sorted integer array where the range of elements are [lower, upper] inclusive, return its missing ranges. For example, given `[0, 1, 3, 50, 75]`, lower = 0 and upper = 99, return `["2", "4->49", "51->74", "76->99"]`.

- [120-triangle.java](../leetcode-java/120-triangle.java)

    Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

- [090-subsets-ii.java](../leetcode-java/090-subsets-ii.java)

    Given a collection of integers that might contain duplicates, nums, return all possible subsets.

- [080-remove-duplicate-from-sorted-array-ii.js](./leetcode-js/080-remove-duplicate-from-sorted-array-ii.js)

    Follow up for "Remove Duplicates": What if duplicates are allowed at most twice?

- [078-subsets.js](./leetcode-js/078-subsets.js)

    Given a set of distinct integers, nums, return all possible subsets.

- [039-combination-sum.java](../leetcode-java/039-combination-sum.java)

    Given a set of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T. The same repeated number may be chosen from C unlimited number of times.

- [081-search-in-rotated-sorted-array-ii.java](../leetcode-java/081-search-in-rotated-sorted-array-ii.java)

    Suppose a sorted array is rotated at some pivot unknown to you beforehand. You are given a target value to search. If found in the array return its index, otherwise return -1. Duplicates are allowed in the array?

- [356-line-reflection.java](../leetcode-java/356-line-reflection.java)

    Given n points on a 2D plane, find if there is such a line parallel to y-axis that reflect the given points.

- **Review** [003-longest-substring-without-repeating-characters.java](../leetcode-java/003-longest-substring-without-repeating-characters.java)

    Given a string, find the length of the longest substring without repeating characters.

- **Review** [274-h-index.java](../leetcode-java/274-h-index.java)

    Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index. According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

- [187-repeated-dna-sequences.java](../leetcode-java/187-repeated-dna-sequences.java)

    All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA. Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

- [244-shortest-word-distance-ii.java](../leetcode-java/244-shortest-word-distance-ii.java)

    This is a follow up of Shortest Word Distance. The only difference is now you are given the list of words and your method will be called repeatedly many times with different parameters. How would you optimize it? Design a class which receives a list of words in the constructor, and implements a method that takes two words word1 and word2 and return the shortest distance between these two words in the list.

- [049-group-anagrams.java](../leetcode-java/049-group-anagrams.java)

    Given an array of strings, group anagrams together.

- [046-permutations.java](../leetcode-java/046-permutations.java)

    Given a collection of distinct numbers, return all possible permutations.

- **Review** [077-combinations.java](../leetcode-java/077-combinations.java)

    Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

- [253-meeting-rooms-ii.java](../leetcode-java/253-meeting-rooms-ii.java)

    Given an array of meeting time intervals consisting of start and end times `[[s1,e1],[s2,e2],...]` (si < ei), find the minimum number of conference rooms required.

- [334-increasing-triplet-subsequence.java](../leetcode-java/334-increasing-triplet-subsequence.java)

    Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

- [300-longest-increasing-subsequence.js](./leetcode-js/300-longest-increasing-subsequence.js)

    Given an unsorted array of integers, find the length of longest increasing subsequence.

- [251-flatten-2d-vector.java](./leetcode-java/251-flatten-2d-vector.java)

    Implement an iterator to flatten a 2d vector.

- [215-kth-largest-element-in-an-array.js](./leetcode-js/215-kth-largest-element-in-an-array.js)

    Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

- [047-permutations-ii.java](../leetcode-java/047-permutations-ii.java)

    Given a collection of numbers that might contain duplicates, return all possible unique permutations.

- [275-h-index-ii.java](../leetcode-java/275-h-index-ii.java)

    **Previous:**

    Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

    According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

    For example, given citations = [3, 0, 6, 1, 5], which means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively. Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, his h-index is 3.

    **Current:** What if the citations array is sorted in ascending order? Could you optimize your algorithm?

- **Review** [324-wiggle-sort-ii.java](../leetcode-java/324-wiggle-sort-ii.java)

    Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

- 322-coin-change: [dp](./leetcode-java/322-coin-change.java), [recursive (faster)](./leetcode-java/322-coin-change_recursive.java)

    You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

- [341-flatten-nested-list-iterator.java](./leetcode-java/341-flatten-nested-list-iterator.java)

    Given a nested list of integers, implement an iterator to flatten it.

- [368-largest-divisible-subset.java](../leetcode-java/368-largest-divisible-subset.java)

    Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj) of elements in this subset satisfies: Si % Sj = 0 or Sj % Si = 0.

- [284-peeking-iterator.java](../leetcode-java/284-peeking-iterator.java)

    [https://github.com/google/guava/blob/703ef758b8621cfbab16814f01ddcc5324bdea33/guava-gwt/src-super/com/google/common/collect/super/com/google/common/collect/Iterators.java#L1125](https://github.com/google/guava/blob/703ef758b8621cfbab16814f01ddcc5324bdea33/guava-gwt/src-super/com/google/common/collect/super/com/google/common/collect/Iterators.java#L1125)

    Given an Iterator class interface with methods: next() and hasNext(), design and implement a PeekingIterator that support the peek() operation -- it essentially peek() at the element that will be returned by the next call to next().

- **Review** [307-range-sum-query---mutable.java](../leetcode-java/307-range-sum-query---mutable.java)

    Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive. The update(i, val) function modifies nums by updating the element at index i to val.

- [384-shuffl-an-array.java](../leetcode-java/384-shuffl-an-array.java)

    Shuffle a set of numbers without duplicates.

    ## Example:

    // Init an array with set 1, 2, and 3.
    int[] nums = {1,2,3};
    Solution solution = new Solution(nums);

    // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
    solution.shuffle();

    // Resets the array back to its original configuration [1,2,3].
    solution.reset();

    // Returns the random shuffling of array [1,2,3].
    solution.shuffle();

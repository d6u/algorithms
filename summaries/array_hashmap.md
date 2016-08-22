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

- [220-contains-duplicate-iii.js](../leetcode-js/220-contains-duplicate-iii.js)

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

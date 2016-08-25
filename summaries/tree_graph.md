# Tree & Graph

## Graph

- BFS topological sort (use node's indegree) [207-course-schedule.java](../leetcode-java/207-course-schedule.java)

    There are a total of n courses you have to take, labeled from 0 to n - 1. Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]. Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

- 310-minimum-height-trees: [fast](../leetcode-java/310-minimum-height-trees.java), [slower](../leetcode-java/310-minimum-height-trees_slower.java)

    TODO: see https://discuss.leetcode.com/topic/30956/two-o-n-solutions

    For a undirected graph with tree characteristics, we can choose any node as the root. The result graph is then a rooted tree. Among all possible rooted trees, those with minimum height are called minimum height trees (MHTs). Given such a graph, write a function to find all the MHTs and return a list of their root labels.

- topological sort [332-reconstruct-itinerary.java](../leetcode-java/332-reconstruct-itinerary.java)

    Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK. Note:

    - If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
    - All airports are represented by three capital letters (IATA code).
    - You may assume all tickets form at least one valid itinerary.

- [133-clone-graph.java](../leetcode-java/133-clone-graph.java)

    Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.

- topological sort [210-course-schedule-ii.java](../leetcode-java/210-course-schedule-ii.java)

    There are a total of n courses you have to take, labeled from 0 to n - 1. Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]. Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses. There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

## Union find

- [261-graph-valid-tree_union-find.js](../leetcode-js/261-graph-valid-tree_union-find.js)

    Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

- [323-number-of-connected-components-in-an-undirected-graph.java](../leetcode-java/323-number-of-connected-components-in-an-undirected-graph.java)

    Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to find the number of connected components in an undirected graph.

## BST

- [108-convert-sorted-array-to-binary-search-tree.java](../leetcode-java/108-convert-sorted-array-to-binary-search-tree.java)

    Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

- [096-unique-binary-search-tree.java](../leetcode-java/096-unique-binary-search-tree.java)

    Given n, how many structurally unique BST's (binary search trees) that store values 1...n?

- [230-kth-smallest-element-in-a-bst.java](../leetcode-java/230-kth-smallest-element-in-a-bst.java)

    Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

- [098-validate-binary-search-tree.java](../leetcode-java/098-validate-binary-search-tree.java)

    Given a binary tree, determine if it is a valid binary search tree (BST). Assume a BST is defined as follows:

    - The left subtree of a node contains only nodes with keys less than the node's key.
    - The right subtree of a node contains only nodes with keys greater than the node's key.
    - Both the left and right subtrees must also be binary search trees.

- [095-unique-binary-search-trees-ii.java](../leetcode-java/095-unique-binary-search-trees-ii.java)

    Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1...n.

## Use depth or height

- Use height [366-find-leaves-of-binary-tree.js](../leetcode-js/366-find-leaves-of-binary-tree.js)

    Given a binary tree, collect a tree's nodes as if you were doing this: Collect and remove all leaves, repeat until the tree is empty.

- Use depth [103-binary-tree-zigzag-level-order-traversal.java](../leetcode-java/103-binary-tree-zigzag-level-order-traversal.java)

    Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

- use depth [222-count-complete-tree-nodes.java](../leetcode-java/222-count-complete-tree-nodes.java)

    Given a complete binary tree, count the number of nodes.

- use depth [129-sum-root-to-leaf-numbers.java](../leetcode-java/129-sum-root-to-leaf-numbers.java)

    Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number. An example is the root-to-leaf path 1->2->3 which represents the number 123. Find the total sum of all root-to-leaf numbers.

- [314-binary-tree-vertical-order-traversal.java](../leetcode-java/314-binary-tree-vertical-order-traversal.java)

    Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column). If two nodes are in the same row and column, the order should be from left to right.

## Traversal

- [144-binary-tree-preorder-traversal.java](../leetcode-java/144-binary-tree-preorder-traversal.java)

    Given a binary tree, return the preorder traversal of its nodes' values.

- [094-binary-tree-inorder-traversal.java](../leetcode-java/094-binary-tree-inorder-traversal.java)

    Given a binary tree, return the inorder traversal of its nodes' values.

- [156-binary-tree-upside-down.java](../leetcode-java/156-binary-tree-upside-down.java)

    Given a binary tree where all the right nodes are either leaf nodes with a sibling (a left node that shares the same parent node) or empty, flip it upside down and turn it into a tree where the original right nodes turned into left leaf nodes. Return the new root.

- [199-binary-tree-right-side-view.java](../leetcode-java/199-binary-tree-right-side-view.java)

    Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

- [173-binary-search-tree-iterator.java](../leetcode-java/173-binary-search-tree-iterator.java)

    Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST. Calling next() will return the next smallest number in the BST. next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.

- [116-populating-next-right-pointers-in-each-node.java](../leetcode-java/116-populating-next-right-pointers-in-each-node.java)

    Given a binary tree, Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

    - You may only use constant extra space.
    - You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).

- [114-flatten-binary-tree-to-linked-list.java](../leetcode-java/114-flatten-binary-tree-to-linked-list.java)

    Given a binary tree, flatten it to a linked list in-place.

    From:

    ```
        1
       / \
      2   5
     / \   \
    3   4   6
    ```

    To:

    ```
    1
     \
      2
       \
        3
         \
          4
           \
            5
             \
              6
    ```

- [337-house-robber-iii.java](../leetcode-java/337-house-robber-iii.java)

    The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night. Determine the maximum amount of money the thief can rob tonight without alerting the police.

- [250-count-univalue-subtrees.java](../leetcode-java/250-count-univalue-subtrees.java)

    Given a binary tree, count the number of uni-value subtrees. A Uni-value subtree means all nodes of the subtree have the same value.

- [298-binary-tree-longest-consecutive-sequence.js](../leetcode-js/298-binary-tree-longest-consecutive-sequence.js)

    Given a binary tree, find the length of the longest consecutive sequence path.

- [255-verify-preorder-sequence-in-binary-search-tree.java](../leetcode-java/255-verify-preorder-sequence-in-binary-search-tree.java)

    Given an array of numbers, verify whether it is the correct preorder traversal sequence of a binary search tree. You may assume each number in the sequence is unique.

- [285-inorder-successor-in-bst.java](../leetcode-java/285-inorder-successor-in-bst.java)

    Given a binary search tree and a node in it, find the in-order successor of that node in the BST. Note: If the given node has no in-order successor in the tree, return null.

- [333-largest-bst-subtree.java](../leetcode-java/333-largest-bst-subtree.java)

    Given a binary tree, find the largest subtree which is a Binary Search Tree (BST), where largest means subtree with largest number of nodes in it.

- [236-lowest-common-ancestor-of-a-binary-tree.java](../leetcode-java/236-lowest-common-ancestor-of-a-binary-tree.java)

    Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

- [113-path-sum-ii.java](../leetcode-java/113-path-sum-ii.java)

    Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

## Construct tree

- [106-convert-binary-tree-from-inorder-and-postorder-traversal.java](../leetcode-java/106-convert-binary-tree-from-inorder-and-postorder-traversal.java)

    Given inorder and postorder traversal of a tree, construct the binary tree.

- 105-construct-binary-tree-from-preorder-and-inorder-traversal: [recursive.java](../leetcode-java/105-construct-binary-tree-from-preorder-and-inorder-traversal.java), [iterative.java](../leetcode-java/105-construct-binary-tree-from-preorder-and-inorder-traversal_iterative.java)

    Given preorder and inorder traversal of a tree, construct the binary tree.

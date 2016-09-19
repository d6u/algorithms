### 23 merge k sorted lists

nearest k point??

给一个partial sorted的数组比如1，3，5，2，4，6，8，10，20，30，11，12，13，数组有N个数，分为M个segment，N>>>M，要求输出排序后的数组。第一反应就是merge k sorted list，按照那个写了下，问了问time 和space 的complexity，facebook家很喜欢问复杂度问题，而且需要解释清楚不是随便说个O就可以的。

Given k sorted lists of O(n) integers each, implement an iterator that will yield all elements in sorted order。大体讨论了几种思路。转换为 linkedlist 做正常的merge，但较好的思路是直接用iterator来实现大类的next,hasnext和constructor。希望大家可以贡献想法看看这种思路怎么继续做下去。面完我所想到的还是新建一个wrapper class, 类似于代替了linklist里面每次指向下一个node。由于是要sort order，肯定需要维护一个k size 的queue。

### 28 implement strstr (KMP)

2. 第一题秒之后，迅速又粘了一段，大意就是把第一个haystack参数变成一个二维数组，然后找needle在haystack第一次出现的位置，同样的不能用string相关方法，还是返回把 `haystack[][]` 二维数组看成一维以后的第一次匹配的字符下标，举例：
`haystack := [[a,b,c,c], [c,b,d]], needle := [c,c,b,d] , return 2; needle := [b, d] return 5`
(5是把haystack看成一维的以后的找到第一个bd以后b的下标)。

### 37 sudoku solver

输入的格子尺寸是随意的，不一定是9宫格。楼主没做过这题，但是也磕磕碰碰做出来了

### 47 permutations II

### 90 subsets II

### 91 decode ways - follow ups

Follow up 1: optimize space complexity to O(1)

Follow up 2: 给定一个定长的序列（可以非常长），请给出 solution 输出所有可能的字母组合

### 114 flatten binary tree to linked list

Follow up: convert binary tree to doubly linked list

### 198 house robber - follow up

follow up: 输出抢劫的house

### 209 Minimum Size Subarray Sum - follow up

follow up: contains negative

用double for loop， O(n**2) time和O(1)space去做，写完之后小哥说可不可以用linear space，答做一个类似dp 的array，sum(i+1) = sum(i) + arr[i+1], sum(i, j) = sum(j) - sum(i+1)。

**LC的sliding window和range sum query的结合

### 214 Shortest Palindrome - KMP

### 220 contains duplicate III

contains nearby almost duplicates - use buckets

### 236 lowest common ancestor of a binary tree - follow up

follow up: lowest common ancestor of all deepest leaves

```
  1
 / \
2   3
   / \
  5   6

return 3

    1
   / \
  2   3
 /   / \
4   5   6

return 1
```

其实 dfs 遍历，返回的时候返回 lca 和 depth，每个 node 如果有大于一个子节点的 depth 相同就返回这个 node，如果有一个子节点 depth 更深就返回个子节点 lca，o(n)

solution 2: recursive post order traversal

follow up 2: iterative

### 278 first bad version - follow up

follow up: what we don't know how many versions in total

### 325 maximum size subarray sum equals k

convert to prefix sum array

### Contact Dedup

UnionFind

输入是这样的: 数字是用户，字母是邮箱，有很多人有多个邮箱，找出相同的用户，相同的用户的判断方法就是有两个用户有相同的email，例如b出现在3和7里，那么3和7是同一个人。 这里面试官假设了输入是valid的。

    1-{x,y,z}
    2-{x}
    3-{a,b}
    4-{y,z}
    5-{b}
    6-{m}
    7-{t,b}

这样输出就是 `[1,2,4]`, `[3,5,7]`, `[6]` 总共有三个用户。

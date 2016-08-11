# Palantir

## Phone

### Integer to English words

[273-integer-to-english-words.js](../leetcode-js/273-integer-to-english-words.js)

### Valid parentheses

[020-valid-parentheses.js](../leetcode-js/020-valid-parentheses.js)

TODO: follow up, can contains other characters

### Max sum subsequence of an array

TODO

### Numbers of islands

[200-number-of-islands.js](../leetcode-js/200-number-of-islands.js)

### Implement FixedLengthQueue

实现一个FixedLengthQueue, 有size(), isEmpty(), add(), remove() 等函数。 用circular array 做的。

再实现一个 `int copy(int* dest, int n)` 函数，从 FixedLengthQueue 里的 buffer copy 出最多 n 个 element 到 dest 数组里，返回值是实际 copy 的 element 的个数

### Kth smallest element in an array

[215-kth-largest-element-in-an-array.js](./leetcode-js/215-kth-largest-element-in-an-array.js)

Follow up: TODO Kth smallest element in a given range inside an array, e.g. array is [1, 3, 2, 5, 7, 3, 4], range [0, 3], k = 3, return 3

### Merge interval

[056-merge-intervals.js](../leetcode-js/056-merge-intervals.js)

follow up:

- 第一个是给一个数字或者interval找到原来的interval list里面是不是包含
- 第二个是返回包含了几次

### 给一个2D的matrix，里面是数字。0代表这个点是水，其他数字代表陆地，相邻的陆地会形成一个岛屿, 求sum最大的岛屿

比如：
1 2 0 0
3 0 4 0
0 1 0 1
结果就是1 + 2 + 3 = 6.

Follow up 1：如果存在值为负数的点会有什么影响？并相应的修改之前的code。

[max-sum-islands.js](./palantir/max-sum-islands.js)

Follow up 2: TODO use iterative approach

### addition class，类似于alien dictionary

ONE ---> 231
+ONE ---> 231
＝＝＝＝＝＝
TWO---> 462
constructor(String left, String right, String result)
boolean eval(Map<Character, Integer> proposedSolution>)返回这个map是不是正确解

然后讨论一下怎么调用这个class来找到解，permutation，没让code，只说idea

### merge intervals， follow up 1 设计一个数据结构可以很快返回搜索的数字是否在interval 当中

follow up 2 如果已知interval以及查询的数字都是16bit的该怎么优化

### 店面1：一个0，1的矩阵，问是不是所有的0都连在一起

### 两个interval的list，每个list之内的interval不会overlap，求两个list之间的overlap。比如[[1,3], [5,7]]和[[2,4], [6,9]]结果就是[[2,3], [6,7]]。我用的两个pointer。

### copy graph.struct Thing {    int length;    struct Thing *things[];}; Return a deep copy of thing. The object graph formed by the copy should have the same structure as the object graph of the original,but they should share no references

### grid的overlay，二维grid内部用黑白二色涂色，然后黑+黑=黑，白+黑=黑，白+白=白，求两个grid重叠之后的结果

grid是用四叉树而不是矩阵来表示的，如果某一个区域全部都是同一个颜色，则该节点就变成叶子节点，因此这个树每个分支的深度不一定一样
在国内半夜面的，脑子有点转不动，反应略慢，一开始写不对，后面自己想想改对了但是时间也快到了，拿了一个中等的分数，所以后面hr通知电面加面一轮

### 今天早上的店面，题目应该是类似地里有过的。就是给一个matrix，0代表white， 1代表black， 在这个matrix里可以上下左右移动，写一个function， 看是否所有的white是连成一片的

### 给H高度的tree,有多少种树结构。

### 1 island

island with biggest value, matrix中每个点都有数值，非0的就是岛，临近的岛数值加起来最大的

LZ solution：
  dfs with a matrix mark visited node.
  optimize: dfs without visited matrix
  optimize: DP

### 给一个二维数组，比如：

    # 0001
    # 0110
    # 0100
    # 0000

判断是否0都是连着的。这个例子返回True。如果把左上角的改成1那就是False

然后小哥问我如果矩阵很大的话你这个solution会有什么问题，我想了一下就说bfs可能占用内存比较多，极端情况下（比如矩阵都是0），queue会很长因为存了很多neighbors。然后dfs在某些情况下占内存比较少一点。但是时间复杂度都是O(n**2)。然后我就想他会不会让我再实现一下dfs，结果我就说dfs用recursive或者用stack来实现就好了，他就说okok然后就没让我写！

### leetcode merge intervals (写code)，.

### 还问了三道题，不用写code，只需要说一下算法：leetcode contains duplicate I && II && III

### LRU Cache

### You have a sorted binary tree and you want to select the ith smallest element from the tree

### 做一個遊戲connect4 (http://en.wikipedia.org/wiki/Connect_Four)

玩法就是兩個玩家輪流在每個column放旗子，只要直排橫排或斜線連成四個就贏了
用兩個function實作
makeMove: 玩家用makeMove在每個column擺旗子
checkWin: 判斷哪位玩家贏
不用考慮 GUI 介面

### Valid Sudoku

### cloneGraph 嘛。我开始写了个 BFS 实现，后来又让我再写一个 DFS 实现。然后聊了会人生就 Byebye 了。

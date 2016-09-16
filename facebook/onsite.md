### 1 Two Sum

### 5 Longest Palindromic Substring

dp解的（考虑是不是有Longest pal string O(n)情况，可以google：Manacher's Algorithm), 这道题不用dp也可以O(n^2)time, 而且不用空间，就是对于每个char和每个char之间，做向左向右的match。

### 10 regex matching

### 15 3Sum

### 17 Letter Combinations of a Phone Number

### 21 merge two sorted lists

### 22 generate parenthesis

### 23 merge k sorted lists

nearest k point??

给一个partial sorted的数组比如1，3，5，2，4，6，8，10，20，30，11，12，13，数组有N个数，分为M个segment，N>>>M，要求输出排序后的数组。第一反应就是merge k sorted list，按照那个写了下，问了问time 和space 的complexity，facebook家很喜欢问复杂度问题，而且需要解释清楚不是随便说个O就可以的。

Given k sorted lists of O(n) integers each, implement an iterator that will yield all elements in sorted order。大体讨论了几种思路。转换为 linkedlist 做正常的merge，但较好的思路是直接用iterator来实现大类的next,hasnext和constructor。希望大家可以贡献想法看看这种思路怎么继续做下去。面完我所想到的还是新建一个wrapper class, 类似于代替了linklist里面每次指向下一个node。由于是要sort order，肯定需要维护一个k size 的queue。

### 27 remove elements

### 28 implement strstr (KMP)

2. 第一题秒之后，迅速又粘了一段，大意就是把第一个haystack参数变成一个二维数组，然后找needle在haystack第一次出现的位置，同样的不能用string相关方法，还是返回把haystack[][]二维数组看成一维以后的第一次匹配的字符下标，举例：haystack := [[a,b,c,c], [c,b,d]], needle := [c,c,b,d] , return 2; needle := [b, d] return 5 (5是把haystack看成一维的以后的找到第一个bd以后b的下标)。

### 33 search in rotated sorted array

### 37 sudoku solver

输入的格子尺寸是随意的，不一定是9宫格。楼主没做过这题，但是也磕磕碰碰做出来了

### 38 count and say

区别是多了个任意的base，不是从1开始

### 39 combination sum

给一个正数n，打印出所有相加的组合
例如10可以打印出
1+1+1+...1
1+2+1+...1
..
9+1
10
*输入是10的话，“9+1”和“1+9”只能输出一个，不能重复

相关解法讨论在连接里：

http://www.1point3acres.com/bbs/forum.php?mod=viewthread&tid=172675&extra=page%3D1%26filter%3Dsortid%26sortid%3D311%26searchoption%5B3086%5D%5Bvalue%5D%3D6%26searchoption%5B3086%5D%5Btype%5D%3Dradio%26searchoption%5B3089%5D%5Bvalue%5D%5B2%5D%3D2%26searchoption%5B3089%5D%5Btype%5D%3Dcheckbox%26searchoption%5B3090%5D%5Bvalue%5D%3D1%26searchoption%5B3090%5D%5Btype%5D%3Dradio%26searchoption%5B3046%5D%5Bvalue%5D%3D2%26searchoption%5B3046%5D%5Btype%5D%3Dradio%26sortid%3D311

### 43 multiply strings

### 47 permutations II

### 49 Group Anagrams

把每个word 字符排序后的string作为key，放到hashmap
      follow up: 问怎么优化，想了下觉得只有字符排序可以用couting sort 优化
另一题：Group anagram
原题，输入一个string里表，按照anagram分组.
Input: ["arts", "star", "cat"]
Output: [ ["arts", "star"], ["cat"] ]

### 53 maximum subarray

### 56 merge interval

给出N个序列，比如2个序列A,B,没个序列包含若干的区间，比如
A: [1,5], [10,14], [16,18]. From 1point 3acres bbs
B: [2,6], [8,10], [11,20]

没个序列内的区间没有overlap但是序列之间的区间没有这个限制。请给出solution合并N个序列到一个序列 Final，Final内依然没有overlap的区间。
比如上例 Final就是 [1,6], [8, 20].

### 71 Simplify path

### 75 sort colors

### 76 minimum window substring

有点不一样的就是，第二个输入不是string，而是一个HashSet，其实就是每个字母都是数量只有一个 （做法应该是和leetcode原题一样）

### 88 Merge Sorted Array

### 90. Subsets II

### 91 decode ways

optimize space complexity to O(1)

给定一个数列，比如1234，将它match到字母上，1是A，2是B等等，那么1234可以是
ABCD
但是还可以是12是L，所以1234也可以写作
LCD 或者
AWD

给定一个定长的序列（可以非常长），请给出solution输出所有可能的字母组合

### 94 Binary Tree Inorder Traversal

binary tree inorder traversal iterator

### 98 validate binary search tree

唯一不同的是妹子/大姐的定义 树可以有重复的值， root大于或者等于左子树，小于或者等于右子树

print all paths in binary tree

### 111 minimum depth of binary tree

### 114 flatten binary tree to linked list

Follow up: convert binary tree to doubly linked list

### 117 populate next right pointers in each node II

### 121 best time to buy and sell stock

### 122 best time to buy and sell stock II

followup: 返回买入和卖出时间的Index

### 124 binary tree maximum path sum

### 125 valid palindrome

这题要求要in-place， 然后输入是char[]，不过做法跟leetcode一样。做这题居然忘记了Character.toLowerCase()这个method。小哥人很好的提醒了一下

### 126 word ladder II

Follow up: 词很多怎么省空间

### 128 longest consecutive subsequence

### 133 clone graph

### 138 copy list with random pointer

### 139 word break

### 158 read n given read4

### 173 binary search tree iterator

### 198 house robber

Follow up: 输出抢劫的house

### 200 number of islands

variant: matrix里是各种颜色,用字母表示，让统计每种颜色的number of connected component，用dfs就可以解决
how to reduce space complexity : 不用extra storage 去 track 哪个 cell 有没有visited 过， 只要visied了 就用一个特殊的符号改变一下input 就好了，可以变成constant space

number of Island的超简化
给出一个二维char表，再给一个坐标.
从坐标开始.
找出所有连接（上下左右）的相同char
最后返回这个大岛的面积

*评论里有个分析我觉得可能会有用
http://www.1point3acres.com/bbs/forum.php?mod=viewthread&tid=200902&extra=page%3D1%26filter%3Dsortid%26sortid%3D311%26searchoption%5B3086%5D%5Bvalue%5D%3D6%26searchoption%5B3086%5D%5Btype%5D%3Dradio%26searchoption%5B3088%5D%5Bvalue%5D%3D1%26searchoption%5B3088%5D%5Btype%5D%3Dradio%26searchoption%5B3090%5D%5Bvalue%5D%3D1%26searchoption%5B3090%5D%5Btype%5D%3Dradio%26searchoption%5B3048%5D%5Bvalue%5D%3D2%26searchoption%5B3048%5D%5Btype%5D%3Dradio%26searchoption%5B3046%5D%5Bvalue%5D%3D2%26searchoption%5B3046%5D%5Btype%5D%3Dradio%26sortid%3D311

### 206 reverse linked list

### 209 Minimum Size Subarray Sum

86. 给一个array和target，求是否存在subarray之和等于target。一开始直接上了sliding window，秒了之后跑了几个test case，面试官问说你这种做法有什么预设，楼主没反应过来，小哥高亮了最后一个test case说你看有负数就不行。当时楼主就蒙了，说这样只能把所有的subarray之和都算出来了，然后就扯到了Fenwick Tree，解释了一下原理小哥说但是我们的array是immutable啊，楼主才想出来用double for loop， O(n**2) time和O(1)space去做，写完之后小哥说可不可以用linear space，答做一个类似dp 的array，sum(i+1) = sum(i) + arr[i+1], sum(i, j) = sum(j) - sum(i+1)。
  **LC的sliding window和range sum query的结合

### 211 add and search word - data structure design

Follow up: support “*” which matchs 0 or more characters

### 214 Shortest Palindrome

### 215 kth largest element in an array

quick sort也可以解决，average run time O(N), worst case O(N^2)。如果数组特别大呢，不想sort呢。可以用一个M size的pq，这样的话就是O(N*logM)

### 219 contains duplicate II

就是用hashset查重复就可以了，关键是窗口的移动。要求optimize到O(n). 面试官给的hint是用hashset做，但是hashmap也可以做。

hashmap解

    public boolean containsNearbyDuplicate(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();.
        for(int i=0; i<nums.length; i++){
            if(map.containsKey(nums[i])){
                int pre = map.get(nums[i]);
                if(i-pre<=k)
                    return true;
            }

            map.put(nums[i], i);
        }.

        return false;
    }

hashset也可以做

    public boolean containsNearbyDuplicate(int[] nums, int k) {
      HashSet<integer> set = new HashSet<integer>();

      for (int i = 0; i < nums.length; i++) {
        if (!set.add(nums[i]))
          return true;
        if (i >= k)
          set.remove(nums[i - k]);. visit 1point3acres.com for more.
      }

      return false;
    }

### 236 lowest common ancestor of a binary tree

### 238 product of array except self

### 252 meeting rooms

### 273 Integer to English Words

### 277 find the celebrity

### 278 first bad version

问了时间空间复杂度；

变种是如果不知道一共有多少版本的情况下应该怎么找

### 283 move zeros

### 297 Serialize and Deserialize Binary Tree

### 300 Longest Increasing Subsequence

### 301 remove invalid parenthesis

### 311 sparse matrix multiplication

### 314 binary tree vertical order traversal

### 325 maximum size subarray sum equals k

### 350 intersection of two arrays II

### Contact Dedup,

输入是这样的:数字是用户，字母是邮箱，有很多人有多个邮箱，找出相同的用户，相同的用户的判断方法就是有两个用户有相同的email，例如b出现在3和7里，那么3和7是同一个人。 这里面试官假设了输入是valid的。
  1- {x,y,z},
  2-{x}
  3-{a,b}
  4-{y, z}
  5-{b}
  6-{m}
  7-{t,b}

这样输出就是 [1,2,4] [3,5,7] [6] 总共有三个用户。

可以用 UnionFind 或者Connected Components的方法做

### 给一个 二叉树 ， 求最深节点的最小公共父节点。

     1
  2   3
     5  6    return 3.

       1
    2   3
4      5 6   retrun 1.

先用 recursive  ， 很快写出来了， 要求用 iterative 。 时间不够了。。。

(Q4的讨论解法）：
http://www.1point3acres.com/bbs/forum.php?mod=viewthread&tid=199739&extra=page%3D1%26filter%3Dsortid%26sortid%3D311%26searchoption%255B3086%255D%255Bvalue%255D%3D6%26searchoption%255B3086%255D%255Btype%255D%3Dradio%26searchoption%255B3089%255D%255Bvalue%255D%255B3%255D%3D3%26searchoption%255B3089%255D%255Btype%255D%3Dcheckbox%26searchoption%255B3090%255D%255Bvalue%255D%3D1%26searchoption%255B3090%255D%255Btype%255D%3Dradio%26searchoption%255B3046%255D%255Bvalue%255D%3D2%26searchoption%255B3046%255D%255Btype%255D%3Dradio&page=2

多叉树 的最底层 所有 叶子的最小公共祖先。面试官先让我试试 二叉树，我用DFS（其实应该用BFS）找到最底层的那些叶子，然后两两找公共祖先（LCA）。最后是O(n^2)的复杂度。后来真想不到怎么优化了。面试官特别nice，他说没关系，然后他教我做，用DFS去找，同时记录每个访问的depth，然后找的时候就存 可能的最底层叶子 和 LCA，然后后面发现更深的node，前面的就删，然后再记录 可能的最底层叶子 和 LCA。然后这样一次DFS就搞定啦，O(n)时间。

相关讨论连接：
http://www.1point3acres.com/bbs/forum.php?mod=viewthread&tid=199548&extra=page%3D1%26filter%3Dsortid%26sortid%3D311%26searchoption%5B3086%5D%5Bvalue%5D%3D6%26searchoption%5B3086%5D%5Btype%5D%3Dradio%26searchoption%5B3089%5D%5Bvalue%5D%5B2%5D%3D2%26searchoption%5B3089%5D%5Btype%5D%3Dcheckbox%26searchoption%5B3090%5D%5Bvalue%5D%3D1%26searchoption%5B3090%5D%5Btype%5D%3Dradio%26searchoption%5B3046%5D%5Bvalue%5D%3D2%26searchoption%5B3046%5D%5Btype%5D%3Dradio%26sortid%3D311

LCA in BST.输入是两个value,不是node.瞬秒，无bug.

Follow up是统计问题，如果这两个值是随机从这颗树里面sample,问我的算法平均需要几次比较就可以得出结果。这题大家可以想一想，很有意思，涉及到一些统计的分布。

题目讨论连接：
http://www.1point3acres.com/bbs/forum.php?mod=viewthread&tid=176941&extra=page%3D1%26filter%3Dsortid%26sortid%3D311%26searchoption%255B3086%255D%255Bvalue%255D%3D6%26searchoption%255B3086%255D%255Btype%255D%3Dradio%26searchoption%255B3089%255D%255Bvalue%255D%255B2%255D%3D2%26searchoption%255B3089%255D%255Btype%255D%3Dcheckbox%26searchoption%255B3090%255D%255Bvalue%255D%3D1%26searchoption%255B3090%255D%255Btype%255D%3Dradio%26searchoption%255B3046%255D%255Bvalue%255D%3D2%26searchoption%255B3046%255D%255Btype%255D%3Dradio&page=2

### Task schedule

工作的调度，是个面经题，有些变种，只要求出给定tasks的工作总时间，在小哥提示下做了优化到O(n). Follow up是如何schedule这些工作，这样最后的工作总时间最少。我说了一种greedy的算法，就是相同task相隔约长约好。但是不太对，小哥说其实是一旦数量最多的task cooldown时间到了，就schedule这个task。问了我大概怎么实现，就结束了。
另一个相关面试：很多面经都提到过。就是比如给你一串task，再给一个cooldown，执行每个task需要时间1，两个相同task之间必须至少相距cooldown的时间，问执行所有task总共需要多少时间。比如执行如下task：12323，假设cooldown是3。总共需要的时间应该是 1 2 3 _ _ 2 3，也就是7个单位的时间。再比如 1242353，假设cool down是4，那总共时间就是 1 2 4 _ _ _ 2 3 5 _ _ _ 3，也就是13个单位的时间

给一个task序列ABBABBC, 和相同task的最小interval. 例如interval=3, 则BB运行
时间为5. 写一个函数输入task序列和interval, 输出运行时间。
　followup: 写一个调度函数，输入task序列和interval，输出task最优执行序列
followup解法：*cool down时间一样，只是到了具体某个时刻，某个task剩余的冷却时间不一样，比如冷却时间是2个单位时间，然后这么排ABC_, 那么在第四个位置，A已经完成了冷却，B的冷却时间剩下1个单位时间，C的冷却时间才开始所以剩下2个单位时间

给一个String, 如AABACCDCD, 插入 `_` 使同一个字母间隔至少为k: 如果k=3: A___AB__AC___CD__CD, 一开始理解有误，认为是要先shuffle字母顺序然后插入'_'，花了不少时间，然后面试官提示字母顺序不变，写出来，然后直接run出来有bug，在coderpad上调了一会才通过。。。

### check if a binary tree is mirrored

就是与根节点镜像对称

### 一骑士在一个无限大的国际象棋棋盘，有障碍. 骑士行走模式:https://en.wikipedia.org/wiki/Knight_(chess)basic: bfs.

calculate the shortest path to some target.
basic code: bfs

follow up:
how to optimize: A*, pruning.
edge case: how to end the program? what kinds of target is unreachable and how to avoid?
                    2 ）Longest consecutive sequence.

### dot product的老题

   A={a1, a2, a3,...}.
   B={b1, b2, b3,...}
   dot_product = a1 * b1 + a2 * b2 + a3 * b3 ＋。。。
   如果数组很稀疏，例如
   A={a1, ...., a300, ...., a5000}
   B={...., b100, ..., b300, ..., b1000, ...}
里面有很多0，用什么数据结构表示能节省空间。我开始说用hashmap，但是hashmap不能做有顺序的iteration。然后改用list和array，两个都可以。后面做题的时用的array。
  题目是：
  input A=[[1, a1], [300, a300], [5000, a5000]]
          B=[[100, b100], [300, b300], [1000, b1000]].
  求 dot product. 问了时间复杂度。
  Follow up:
  如果length(B) >>> length(A)，即B非常长，怎么做能减少时间复杂度。对A里面的每个数，用binary search找B中相对应的值，这样时间复杂度是O(nlogm) (n = len(A), m =len(B)).时间不够没写代码， 就说了一下思路和复杂度。

**这一题的输入就是稀疏数组的非0的数列出来了，A=[[1, a1], [300, a300], [5000, a5000]]的意思就是A中第1个数是a1,第300个是a300,第5000个是a5000，其他都是0.

原题，一维vector相乘，然后扩展到sparse vector，每个vector就是一个list而已，或者想象成array；和dot product那题有联系
      两个sparse向量点积，设计个数据结构可以optimize运算，用了hash.
另一题：sparse vector dot multiplication

44. （更多描述在FB System Design #34也有一些）设计一个data structure来存储spare vector并做dot product（和设计也有关）
一开始我的思路是用hashmap， key存index，value存non-zero vector element。乘积的时候，遍历size小的那hashmap的每一个key, 然后查找他的key是否在另一个中能找到，如果找到就做乘积。小哥问了时间复杂度，然后说hashmap在这里会有什么问题，这块儿我没很清楚的回答出来，我的回答大概就是hashing会有overhead。他的意思是hashmap空间上还有多余的overhead。这里不是很明白。。。。
然后问我还有没有别的data structure，然后说可以不考虑乘积的时间复杂度，然后我的solution就是用一个vector<pair<int,int>> pair.first 是index，pair.second是value，做的dot product的时候，因为pair.first是sorted，所以查找可以用二分查找，而且运算的时候，要iterate size小的那个vector<pair<int,int>>，时间复杂度是 O(sizeA*log(sizeB)),(sizeA < sizeB). 同时迅速敲好了binary search的代码以及压缩vector的代码，接着又被问，可不可以再优化时间复杂度，因为时间不多了，面试官说，可以用while loop，然后同时遍历两个vector<pair<int,int>>，如果是交集，就做乘积，否则就continue，这样时间复杂度是O(max(sizeA,sizeB)).因为时间不够，所以没有当场写代码，面试官也说不用写了。现在把代码写一下，代码大概就是:

    int i = 0,j = 0;
    int sum = 0;
    while(i < sizeA && j  < sizeB)
    {
          if(A[i].first == B[j].first)  sum +=  A[i].second * B[j].second //do product
          else if(A[i].first < B[j].first) i++;   //因为都是排好序的，所以如果A[i].first小，i往前移动
          else j++;  //同理
    }.

http://www.1point3acres.com/bbs/forum.php?mod=viewthread&tid=200580&extra=page%3D2%26filter%3Dsortid%26sortid%3D311%26searchoption%5B3086%5D%5Bvalue%5D%3D6%26searchoption%5B3086%5D%5Btype%5D%3Dradio%26searchoption%5B3088%5D%5Bvalue%5D%3D1%26searchoption%5B3088%5D%5Btype%5D%3Dradio%26searchoption%5B3046%5D%5Bvalue%5D%3D2%26searchoption%5B3046%5D%5Btype%5D%3Dradio%26sortid%3D311

另一题店面：Sparse vectormultiplication. 设计一个class {int index; int value},
然后问如果有一个向量比另一个长很多怎么办，遍历短的，对长的二分查找。

### Minimum Size Subarray Sum

### random max index的变种

Reservoir Sampling 不需要额外space

### 最后的coding是给一个数组和一个数N， 随机返回该数组中任意一个不大于N的数。

### 破解密码

提供了一个函数，isPassword(String str)，如果pass in的是正确的密码，return true。又给定了每个字母可以变形的集合（例如，字母a可以变形为a或者A或者B或者 `*`, 字母b可以变形为B或者F或者&...，需要自己设计一个data structure来存这个mapping），设计并实现一个函数，在给定一个字符串的情况下，对字符串进行变形，最后找到正确的密码。`*` 是简单的排列组合dfs问题么？对应leetcode17 。只不过字典由10变为256。

### Binary Search

### Merge Sort

### Quick Sort，

### nested array

### Meeting room

http://www.lintcode.com/en/problem/number-of-airplanes-in-the-sky/

Meeting room 变形：有一个类似meeting room的问题，让求的不是需要多少room，而是给出重合最多的时间点，或者说有最多meeting的时间点？Answer：排序好starttime和endtime,遇到starttime +1，遇到endtime-1，同时记录当前starttime，endtime的区间。保持最大的那个count然后返回它的区间不就好了？

### subarray sum to target

输入一个array，元素都不是负数 和一个 int: target   输出是否存在有没有subarray sum = target, follow up 有负数怎么办

### 一个矩阵斜着走的list例子如下

123
456
789
输出：{1}{42}{753}{86}{9}

### Log<fun_name,timestap,isStart>

给一串 `fun_name` 调用的 `log`,返回一个Map,key是fun_name, value是fun实际调用时间。
   如: f1, t1, true;  f2, t2, true; f2, t3, false; f1, t4, false;    返回 f2, t3-t2;  f1, t4-t1-(t3-t2)

### Min Queue

跟Min Stack类似， 实现一个Queue， 然后O（1）复杂度获得这个Queue里最小的元素

### For a given a binary tree, print paths from root to all leaf nodes, one path per line.

For tree:

        A
        / \
       B   C
      /   / \
     D   E   F
ABD
ACE
ACF

### 给出两个string, leetcode, codyabc和一个数字k = 3,问两个string里面存不存在连续的common substring大于等于k.

比如这个例子，两个string都有cod,所以返回true。楼主用dp建了一个m*n的table秒了，然后写test case,发现有个小corner case,改了,pass

### 这个题想不起来具体的例子了，大概是A和B分别代表两个不同的字符串。字符串由A,a,B,b组成。给定一个初始字符串（也是由A,a,B,b组成），遍历这个初始字符串，如果遇到A或B，就用相应的字符串替代，这样就得到一个新字符串，然后对新字符串做替换操作。问替代n次后第k项是什么字母。题目不难，但是不断要求优化，比如新字符串只需要保持size k。这个字符串具体例子很巧妙但记不起来了，会形成一个repreated pattern，最后经面试官提示可以用binary search优化。

### Find longest arithmetic subsequence in an unsorted array

http://www.geeksforgeeks.org/length-of-the-longest-arithmatic-progression-in-a-sorted-array/

http://www.1point3acres.com/bbs/forum.php?mod=viewthread&tid=199553&extra=page%3D1%26filter%3Dsortid%26sortid%3D311%26searchoption%5B3086%5D%5Bvalue%5D%3D6%26searchoption%5B3086%5D%5Btype%5D%3Dradio%26searchoption%5B3089%5D%5Bvalue%5D%5B2%5D%3D2%26searchoption%5B3089%5D%5Btype%5D%3Dcheckbox%26searchoption%5B3090%5D%5Bvalue%5D%3D1%26searchoption%5B3090%5D%5Btype%5D%3Dradio%26searchoption%5B3046%5D%5Bvalue%5D%3D2%26searchoption%5B3046%5D%5Btype%5D%3Dradio%26sortid%3D311

### product of the array

给定一个array，返回里面元素乘积的所有可能值。 例如给定array:[1,2,3,4] 应该返回 [1, 2, 3, 4, 6, 8, 12, 24]

backtracking遍历一下所有乘积

### Natural ordering

自然string comparator。不知道的搜下。就是string 比较的时候考虑里面数字的大小，比如 abc9 < abc123 abc > ab9  因为char比digit重要。

### Given a set of Tree Nodes, find if they form a single valid BST, if so return the root

http://www.1point3acres.com/bbs/forum.php?mod=viewthread&tid=175014&extra=page%3D1%26filter%3Dsortid%26sortid%3D311%26searchoption%5B3086%5D%5Bvalue%5D%3D6%26searchoption%5B3086%5D%5Btype%5D%3Dradio%26searchoption%5B3089%5D%5Bvalue%5D%5B2%5D%3D2%26searchoption%5B3089%5D%5Btype%5D%3Dcheckbox%26searchoption%5B3090%5D%5Bvalue%5D%3D1%26searchoption%5B3090%5D%5Btype%5D%3Dradio%26searchoption%5B3046%5D%5Bvalue%5D%3D2%26searchoption%5B3046%5D%5Btype%5D%3Dradio%26sortid%3D311

### list of sorted integer arrays，要求找所有的数的median

e.g. [1,3,6,7,9], [2,4], [5], return 5

http://www.1point3acres.com/bbs/forum.php?mod=viewthread&tid=193898&extra=page%3D1%26filter%3Dsortid%26sortid%3D311%26searchoption%5B3086%5D%5Bvalue%5D%3D6%26searchoption%5B3086%5D%5Btype%5D%3Dradio%26searchoption%5B3089%5D%5Bvalue%5D%5B2%5D%3D2%26searchoption%5B3089%5D%5Btype%5D%3Dcheckbox%26searchoption%5B3090%5D%5Bvalue%5D%3D1%26searchoption%5B3090%5D%5Btype%5D%3Dradio%26searchoption%5B3046%5D%5Bvalue%5D%3D2%26searchoption%5B3046%5D%5Btype%5D%3Dradio%26sortid%3D311

### Pretty print JSON

### Moving Average of An Input Stream. The size of a window is n

For example:
input = [1, 1, 2, 3, 3, 4, 4, 4, 5.....], n = 3;
moving average = [1, 1, 1.33, 2, 2.67, 3.33, 3.67, 4, 4.33...]
    public void movingAverage(Stream input, int windowSize)

### 写一个计算器，可以进行加减运算

follow up1：可以进行加减和乘除运算。

follow up2： constant space

follow up3： 还可以进乘方运算

### check big/small endian

### 一棵树，返回一个list的头结点：

      3
     /
    1
     \
      2

1《——》2《——》3（一三相连）
意思是返回一个递增list，1的right是2，left是3， 2的left是1，right是3,3的left是2，right是 1.
我用inorder获得递增序列然后设置left与right的node。返回1这个结点。

follow up如何不先获得序列，直接在traverse的时候获得结果。follow up没回答出来。

http://www.1point3acres.com/bbs/forum.php?mod=viewthread&tid=192256&extra=page%3D2%26filter%3Dsortid%26sortid%3D311%26searchoption%5B3086%5D%5Bvalue%5D%3D6%26searchoption%5B3086%5D%5Btype%5D%3Dradio%26searchoption%5B3089%5D%5Bvalue%5D%5B2%5D%3D2%26searchoption%5B3089%5D%5Btype%5D%3Dcheckbox%26searchoption%5B3090%5D%5Bvalue%5D%3D1%26searchoption%5B3090%5D%5Btype%5D%3Dradio%26searchoption%5B3046%5D%5Bvalue%5D%3D2%26searchoption%5B3046%5D%5Btype%5D%3Dradio%26sortid%3D311

### 一个char[][] board，里面有‘b’'B''w''W'四种，bB都表示black，wW都表示white，找最大的正方形面积，这个正方形四个边都是black，正方形中间随便黑白无所谓。Example：一个5x5的board如下，符合条件最大正方形是个3x3的，return面积9。

wwbww
wbbbb
bbWbw
Bbbbb
wwwww

http://www.1point3acres.com/bbs/forum.php?mod=viewthread&tid=189214&extra=page%3D2%26filter%3Dsortid%26sortid%3D311%26searchoption%5B3086%5D%5Bvalue%5D%3D6%26searchoption%5B3086%5D%5Btype%5D%3Dradio%26searchoption%5B3089%5D%5Bvalue%5D%5B2%5D%3D2%26searchoption%5B3089%5D%5Btype%5D%3Dcheckbox%26searchoption%5B3090%5D%5Bvalue%5D%3D1%26searchoption%5B3090%5D%5Btype%5D%3Dradio%26searchoption%5B3046%5D%5Bvalue%5D%3D2%26searchoption%5B3046%5D%5Btype%5D%3Dradio%26sortid%3D311

### 一个完全树。node有parent指针。

每个node的值为 0或 1
每个parent的值为两个子node的 “and” 结果
现在把一个leaf翻牌子（0变1或者1变0）
把树修正一遍

### Copy a string and remove duplicates

Input: "kkbkbw"
Output: "kbw"

被问到 string+=操作复杂度的时候，口胡amortized O(1) 并成功忽悠住了对方。
面试完了去翻文档被打脸……是O(n)

### 找两个array 里面相同的数字

follow-up就是给你一个 `user_id` 和API 接口 get_friend(int id),

让你找出所有user id 是你的朋友的朋友但不是你的朋友，然后根据mutual friends的数量排序

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

### random max index 的变种

Reservoir Sampling 不需要额外space

### 最后的coding是给一个数组和一个数N， 随机返回该数组中任意一个不大于N的数。

### 破解密码

提供了一个函数，isPassword(String str)，如果pass in的是正确的密码，return true。又给定了每个字母可以变形的集合（例如，字母a可以变形为a或者A或者B或者 `*`, 字母b可以变形为B或者F或者&...，需要自己设计一个data structure来存这个mapping），设计并实现一个函数，在给定一个字符串的情况下，对字符串进行变形，最后找到正确的密码。`*` 是简单的排列组合dfs问题么？对应leetcode17 。只不过字典由10变为256。

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

### 写一个计算器，可以进行加减运算

follow up1：可以进行加减和乘除运算。

follow up2： constant space

follow up3： 还可以进乘方运算

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

### 一个 `char[][]` board，里面有‘b’'B''w''W'四种，bB都表示black，wW都表示white，找最大的正方形面积，这个正方形四个边都是black，正方形中间随便黑白无所谓。Example：一个5x5的board如下，符合条件最大正方形是个3x3的，return面积9。

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

### 找两个array 里面相同的数字

follow-up就是给你一个 `user_id` 和API 接口 get_friend(int id),

让你找出所有user id 是你的朋友的朋友但不是你的朋友，然后根据mutual friends的数量排序

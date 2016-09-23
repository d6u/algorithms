### Log<fun_name,timestap,isStart>

给一串 `fun_name` 调用的 `log`,返回一个Map,key是fun_name, value是fun实际调用时间。
   如: f1, t1, true;  f2, t2, true; f2, t3, false; f1, t4, false;    返回 f2, t3-t2;  f1, t4-t1-(t3-t2)

### Min Queue

跟Min Stack类似， 实现一个Queue， 然后 O(1) 复杂度获得这个Queue里最小的元素

### 给出两个string, `leetcode`, `codyabc` 和一个数字 k = 3，问两个 string 里面存不存在连续的 common substring 大于等于k.

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

### list of sorted integer arrays，要求找所有的数的 median

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

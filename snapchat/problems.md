## 一个INPUT STRING ARRAY1 比如CAT, DOG，一个INPUT STRING ARRAY 2， 比如GAT, DOC, CD, GOAT, BAD, COOL, 要求第一个INPUT ARRAY的字母必须全部用，而且每个字母只能用一次，求其能组合成的INPUT STRING ARRAY2里的单词组合

比如上面这个例子，返回值会是{{GAT, DOC},{CD, GOAT}}

## game of life

1. input `int[][]`
2. input `boolean[][]`
3. stream input
4. 首先问时间空间能不能省，我就说可以存活着的pair<x,y>，然后他们怎么判断下一轮是死是活？我说check live的邻居，然后周围死的也check一下是不是活了
5. 他又问如果 board 无限大怎么办, 那只记录边界和是活细胞的点的位置，挺满意
6. 不能用in place来做，用hashmap来记下一轮会发生变化的点

## 判断是不是二分图

## 很多object移动 速度方向 都不一样 overlap 的话都消失 怎么检测某个时刻 哪些object还在

## LC 253 meeting room II

- 要输出最后如何安排
- 如果每个meeting有权值，选一个没有conflict的meeting组合，使weight sum最大。
面经题，follow up要求O(NlogN)
- 哪些时间段这个room是被占用的

## parse function log.function_name    start_or_end      timestamp

f1                           start                   1
f2                           start                   3
f2                           end                   5
f1                           end                   7
f3                           start                  9
f3                           end                   10

返回一些interval表示函数的运行interval,如上面这个log就返回

f1 [1,3] [5,7]
f2 [3,5]
f3 [9,10]

## LC combination sum I, II, III, IV

Follow up：有负数怎么办

follow up：可以有负数，增加一个参数表示可以做多取几个负数

### Combination sum I & II

follow up是数字不重复怎么办，其实就是每次取一个数后将他从set中移除，回朔时在加上去

## sqrt()

自己因为刚练习过，所以很快写出了牛顿迭代的方法。然后被要求做测试，分别使用build-in 的sqrt()测试了，负数，0，以及 `INT_MAX`

## Anagram + Group Anagram

给定字符串A，B，判断A中是否存在子串是B的anagram

follow up: given an array of strings and a target string, use O(n) complexity to check for anagram of target string

similar: LC 76 Minimum window substring

## LC 140 Word Break II

follow up: improve, cache or trie?

follow up: return one string, use divide and conquer

## Parse log

Use file system API

## cc150 General queue

## Number removal

给一个数组，元素是0-9的int，remove掉其中n个数，使剩下的数在原顺序的情况下最小。

e.g. 7129，去掉两个数字，最小为12。 57294，去掉两个数字，剩下的最小为294。

复杂度 O(length + n)。

follow up: 如果其中有一个负数怎么办？这里你需要跟面试官clarify怎么处理负数。我clarify的结果是，负数不能在剩下数的中间，例如1 -2 9，是invalid的，负数只能在剩下数的首位。例如-2 1 3。例如：7 -1 3 4，去掉一个，剩下的最小为-134。8 6 1 -8 6，去掉两个，因为-8前面有三个数，所以必须把-8去掉。

## IP filter

过滤网络ip地址。给一堆子网掩码，然后给ip地址，判断这个ip地址是不是在其中一个子网掩码里。我说了用trie做，他说可以，写完之后跑了一两个test case没啥问题，他说你加上trie的删除吧，写好后他看了觉得应该是对的，也没跑。

后来说让这个trie thread safe。我说直接加上synchronized，他说有别的方法吗，我一时也没想到很好的方法，因为感觉这个东西好像也不是那么容易分离key space然后分别上锁的

## 给你很多圆，用圆心和半径表示，求有没有圆是相交的。朴素解法是枚举任意两圆，复杂度O(N^2)。小哥问有没有优化。优化的思路是，每个圆的x值都是个区间，只有那些x区间相交的圆，它们才有可能相交。如果两个圆x区间相交，那么就比较圆心距离和半径和，看是不是相交。这样不用枚举任意两个圆。然而worst case还是O(N^2)，比如所有圆的x区间都有覆盖。

## big number add

就是两个很大的数相加，要考虑小数.

## LC 290, 291 word pattern II

题目是 given a pattern, given input string check whether it follows the pattern.  eg: pattern = "abba", input = "bigsmallsmallbig" return true.

## LC 332 Reconstruct Itinerary

## LC one edit distance

给一个target串，判断另外source串中有没有substring满足edit distance of target and that substring <= 1，讲下思路然后写，没写完整

## 给两个节点，判断两个人是不是6度之内的朋友并且返回中间有多少人

一开始给了用queue和set的bfs解法，他说空间复杂度太高了，后来说用dfs，他说空间还是高，毕竟要用set存访问过的节点，我实在想不出来了，要了提示，可是感觉提示也并不是那么明显，我说能不能从两个点分别开始搜？他说你觉得这对复杂度有优化吗？我就觉得这估计也没戏。
他说你先写一个你的解法，有时间我们再优化。写了那个bfs的，写完他让给test case，我忘了a和b是同一个人以及a和b中间人数多于6个的情况了，他提醒了一下加上了一两句判断。写好之后他看了觉得应该没bug了，让我问问题了，我还在纠结优化，他说10min估计不够了，优化是optional的(估计是安慰我的)

## word search

简易版，一个字典，给个单词，判断单词在不在字典里。

follow up: 就是如果单词里有问号，代表任意字母，判断字典里是不是有这个pattern的单词。

Word Search 变形，输出字典里面每一个单词出现的次数。Follow up是怎么scale，要求把代码写下来再运行

## 有墙找路的变形 1 是路 0 是墙， 让你从左边col的任意点走到右边col的任意点的最小step。走不到就返回-1

注意起始点是任意左col的点 而不是左上 ， 也不是走到右下。 要考虑到中间如果有一个col全部都是0（墙）的case

follow up: print path

follow up: 是现在墙可以打破，没打破一个 cost 为1，求 cost 最小的路线。

## 以BST实现Hash table，只需要支持int型hash到int型。

几个接口函数：
int getValue(int)
void insert(int)
bool erase(int)

## Evaluate String

(2*3)+6

http://www.geeksforgeeks.org/expression-evaluation/

## minstack

## number of island

## House Robber

## 定义一个UndirectedUnweightedGraph类，首先要自己定义构造函数的参数，然后定义以下函数：addEdge(), hasEdge(), numberOfEdges()

题目是实现一个无向无权图（简单吧。。。。），要求能增加一条边、判断两个节点之间是否存在直接边、返回边的条数。第一次写没有import，各种undefined errors。虽然最后package的名字都是面试官告诉我的，但毕竟想到要import的是我，所以祈求少扣点分吧。。。。import之后还有个语法错误，是面试官出手解决的。这里估计大出血。但更大出血的是在我定义了一个adjList之后，面试官问我，adjList这个东西是线性的，有没有更好的方法。我当时一下就蒙了，图从来都是用adjList表达的，所以我说现在我只能想到这个方法，最多就是每个节点的adjacent nodes放到一个哈希表里面。然后写完了，自己写了个简单的test case，有个bug，主要是添加的边有重复的时候，边的数量统计会出错。改了一下改好了。面试官说我把每条边都对称的保存了一遍，有没有办法把storage砍掉一半？我就说，每次添加一条边的时候，把较小的节点挑出来，只把这条边保存在较小的节点的adjacency hashSet里面。他说OK。

最后是follow up，没写完，说了个思路，而且可能不对。要写一个图的serialize和deserialize函数，要求打包到最小。我又蒙了，只搞过树的serialize，没搞过图的serialize 啊。只能说，首先把节点个数放在字符串的头部，然后把所有边保存为节点对，节点对用逗号分隔，每对节点内用空格分隔，然后所有的节点对放在一个字符串里面。这个follow up真的没想通，面试官强调压缩到最小，是不是在暗示什么特别的算法。

## LC Multiply Strings，

需要考虑输入为负数

## 2D array的搜索，大概就是在有障碍物的2d array中，找离某几个点路径和最近的点

## 8 * 8的棋盘给起点和终点， 找一共有多少条路径

## longest incresing subsequence

## 有一个图， 每个节点的indegree可能是无限的， 每个节点的outdegree是2 （除了子节点），每个节点的val是char, 问inorder traversal 这个图的复杂度，

然后implement function int getKth(TreeNode root, int k)
返回inorder tarversal里的第k个元素。
总之需要对图论有极强的理解才能答上来，对dfs, bfs, dp, 图论有极强的理解

## Binary tree to double linked list

## 设计一个支持range query的数据结构，存的是类似`2016-3-15-09：30-service1`这样的结构，就是date加上用了哪个service的记录，然后给个时间区间求某个service用了多少次，没写代码，就说想法

## single thread log 以及followup, 面经高频

## LC path sum 1, 2

## 3d grid，每个点有高度，给起点和终点，求一个直升机起点到终点高度和最小的路径，注意一点是直升机只能上升不能下降, 直升机那道题其实就是个2d array，array[j] 存的就是高度了，他给了任意两点，求直升机从一点起飞飞到另一点的高度之和，约束条件是飞机只能保持在原有高度或者往上飞，不能往下飞

## 一堆数里加`（）+ *`， 求最大值，

follow up: 求back trace求最大值的string表达式

## f表示从i到j的数字能形成的最大值

**对的，其实是三维dp，dp[j] = max(max(dp[i+k]+dp[i+k+1][j], dp[i+k]*dp[i+k+1][j]),dp[j])

dp(I,J), i打不出来。。。

---

Phone 2:  名词加复数。给我了个链接，http://www.factmonster.com/ipka/A0886509.html，follow这些rules。给一个String[] list，返回他们的复数形式

06-11

直接贴了一段代码python。

class Employee(object):
    def __init__(self, employee_id, reports):
        self.employee_id = employee_id
        self.direct_reports = reports

    def get_employee_id(self):
        return self.employee_id

    def get_reports(self):
        return self.direct_reports

class Company(object):
    def __init__(self, ceo):
        self.ceo = ceo
    def find_least_important_common_boss(self, e1_id, e2_id)：        # implement

解释了一下题意：
公司有一个CEO，是Employee类，然后每个Employee有可能有很多direct reports。
现在公司里有两个人发生争执，这个时候只能找他们两个人的least important common boss来解决。 问怎么找？

第一个想法就是找lowest common ancestor。问他是不是每个人最多只能有两个direct reports，二叉树做多了。
他说不是，可能很多。

我就说可以遍历每个孩子节点，用类似二叉树的方法解决。
大概写了二十分钟，跑了一些test cases。对方也说没有什么问题，问了一下corner cases。最后聊天结束。

06-10

1. 经典题目
    Valid Palindrome.
    Follow-up是可以增删改，使得输入字符串成为palindrome，输出最少操作次数。（DP）
    应该是followup没来得及写完，只是提供了思路，因为立马还有其他公司的面试，所以没有继续讨论下去了，所以Snapchat给我安排了二面。

另一题：第一题是valid palindrome。判断是不是合法的palindrome。第二题说给一个string,可以add/delete/change，还可以combine几种来使他变为合法的palindrome。比如：ebabc可以先删了中间的a再把c改成e。问最少需要几步。

2. 检测不合法username。
    不合法条件：1. 输入username和"snapchat"之间只有一字符差别；
                       2. 输入username相当于在“snapchat"基础上插入1个字符；
                       3. 输入username相当于在“snapchat"基础上减少1个字符。
    满足上述条件任一，为不合法username。
    Follow-up: 比较字符串从”snapchat“改为任意。

06-08

Phone: Wildcard Matching

另一题详细的wildcard matching：讲了DP的解法，写完，又忘记namespace了，不过这次很快发现了，大哥问：你咋这么快就发现了？我说：上午也忘了。运行完大哥follow up说你这个p[j] == '*'的情况，你写了三个L(i - 1, j),L(i - 1, j - 1)和L(i, j - 1)能省一个，你给优化一下告诉我为什么。后来想想说L(i-1, j-1)可省，因为一个可以算成多个，大哥说解释的太通俗，算你过了。然后就是聊天

Onsite 1:  安卓解锁 （Android unlock）

Onsite 2：Alien Dictionary

另外一题：Alien Dictionary，不同的要求是如果排序结果不唯一，则直接报特殊错误（在原题基础上加一个if 判断就可以啦）。

另一题：Alien dict （感谢面筋。。。） 具体就不说了，写了topo sort。之后小哥详细问了怎样test保证能在product work，扯了下unit test + modular test + system test, 然后具体说了unit test的五六种case，然后test发现有个小bug，改之。再问如找不到valid sequence咋办，以及写exception。小哥不太熟unordered_map，问我有个地方是否会出现out of bound问题，我说map会直接新建一个value不会有问题，他表示惊奇并且说还是要注意下。

Onsite 3：Calculator

basic calculator +-*/和数字 都是一位 没有空格 输入都是valid 所以不用考虑corner case

  follow up是 数字变成多位

  然后再follow up加上空格

  follow up: 负数
另一题： leetcode原题 basic calculator II， 不需要考虑空格， 但是除法结果不限制是整数。
follow up：如果可以有括号怎么做（这个说一下思路就好，没要求我在电脑上写出来运行）

另一题：地里面经Basic Calculator多位，double，带括号，没空格，没有follow up。

Onsite 4：Count朋友的snap，然后排序

05-28

Onsite 1：就是那个给个1*1+2， 返回3的题.

用了stack方法10分钟答完。

接下来的follow up 检测invalid input， 然后加括号，还有各种啥的。invalid input情况真是多啊， 答了40分钟。。

Onsite 2：permutation。
直接dfs写，不过我终止条件那写成了result.add(path)。结果结果一直是空的， debug了3分钟才搞出来。
follow up： next permutation。
leetcode 原题， 不过我没刷过， 因为觉得方法太数学了。。。然后百思不得其解找面试官要了hint

05-27

Onsite 1：shortest path sum in matrix, follow up 打印路径, 问有多少种最短路径（Int数组）

Onsite 2：问了道六边形构成的图，问怎么存这六边形，以及如何返回他的六个邻居
  **假设有个中心，然后它是ring1 就是第一行的输入， 第二行是它的邻居，第三行是第二行的外层邻居有十二个。。。问你要怎么存这样的结构，然后通过坐标对应的某个元素 输出它对应的六个邻居

Onsite 3：一个permutation 加第k个permutation （类似LC 60）

05-20

Onsite 2：给一个contact名单，电话键盘有字母，实现给一个电话，看对应的名字在不在contact中

另一题：题目是手机上的通讯录，每条记录只有(name, number)这种pair,有些记录名字重复，有些记录号码重复，让我返回一个list<list<Record>>，将所有记录按人分组。比较tricky的点在于(ABC,123), (ABC, 456), (BCD, 456)三条记录，第一条和第三条也属于同一个人。要求时间复杂度尽量小

Onsite 4：BST给数值k，找两个node加起来为k，要用less than O（n） space， 实现两个整数相除

05-19
Phone: big float add
给你两个string 表示两个float number 不能转换成float或者int 就用string来计算他们俩加和的结果 是snapchat最常考的一道电面面经题。。。

05-12

Phone：LeetCode原题 Jump Game 1和2

Onsite 1:  算术式Evaluation, 要求支持+-*/()

Onsite 2:  一个2D平面有一堆雷达（雷达有x, y坐标，以及能探测到的范围r半径）然后又一辆小车要从y=0和y=1的区间里面通过并且不能被雷达探测到。让写一个function看小车能不能通过

**雷达那题是这样的：一个tunnel， 范围是[0，1]中间有各种尺寸的雷达，(x, y, r)，一个小车只有不被雷达监测的地方可以通过，问给定一个List<Radar>判断小车能不能过去。这轮最成功，一点点和大哥分析出需求，做出来的。最后做完题，边走还边和大哥聊天，指出了在snapchat使用中有个小bug，大哥表示会反映一下

另一题 雷达：有一条路，路两边可以想象为 y = 0 和y = 1两条直线。现在给你list of radar，每个雷达为(横坐标，纵坐标，辐射半径)。问你一辆车能否通过这条路

另一题 雷达：一个tunnel， 范围是[0，1]中间有各种尺寸的雷达，(x, y, r)，一个小车只有不被雷达监测的地方可以通过，问给定一个List<Radar>判断小车能不能过去。

Onsite 4：基本上纯behavior，最后问了一个很简单的题目，就是Leetcode Unique Path ii.

问题一个走迷宫问题。给了一个矩阵，"1"代表起点，位于左上角；"9"代表重点，位于右下角；"0"代表通路，"5"代表墙。.
矩阵长得是这样

    [
      [1, 5, 5, 5, 5, 0],
      [0, 5, 0, 5, 5, 0],
      [0, 5, 0, 0, 0, 0],
      [0, 5, 0, 0, 5, 0],
      [0, 0, 0, 5, 0, 9]
    ]
设计一个算法，看看这个迷宫能不能从起点走到终点。

另一题：变种。题目是一个矩阵里某些位置有墙，给一个出发点及目的地，求最短距离。 follwup是现在墙可以打破，没打破一个cost为1，求cost最小的路线

另一题：Unique Path I + II, 加了面试官自己的follow up，就是如果给定的grid里面有三种情况，0能走，1不能走，2表示弹簧，可以走到2右边2格的位置，求结果 对于I, LZ直接说用dp做了，面试官表示其实直接一个公式就能算出来- -。但还是让LZ在白板上画了图，讲了思路，然后coding, 以及写test case测试 然后问LZ代码可以怎样优化让其更reliable更readable…LZ没啥概念，瞎扯了下…然后又问如果grid很大，如何encapsulate input, 依旧有点答非所问。。

另一题：Follow up：于是就follow up出了第三个题，把第二个题变了一下说这个人可以上下左右都走，还是找最短距离。这个用dp就做不了了，于是就换成了bfs来做，还写了一点小bug，没有维护visited的set，小哥最后给我指出来了，然后时间就到了。

05-12

Phone:  上周五面了snapchat电话面试，题目就一道 Task schedule，已跪。给个接口Task, 有两个函数void excute() and Set<Task> GetDependencies();
返回一个task的list，顺序是先子后父而且不能重复，子里面也有可能有父。
example：A -> B -> C -> D
输出应该是d, c, b, a

好像follow up 是不能有环，记得不太清楚了。
像A -> B -> C -> B

这题用Topological sorting
https://en.wikipedia.org/wiki/Topological_sorting

另一题：给了一个class如下

     class Task {
        public: void exec() {};
        set getDeps() {}
        };

 然后写一个函数，输入是一堆Task，每个task可能有一些dependency，必须先执行完dependency才能执行这个task，输出是这堆task的正确执行顺序。follow up是如果有环，需要报出错误信息。同时可以补充给的这个class。依然是用递归写的。。。

另一题：题目是给一些tasks，每个tasks有一些dependencies，要求输出task 的执行顺序，每个task只执行一次，并且所有dependencies执行完了之后再执行当前任务，每个task里面有两个Method 一个是execute 另一个是getDependencies() 就是返回它所依赖的task的List
就是很简单的拓扑排序，然而我并没有写熟练
最后他问了个问题说如果tasks太多无法fit in memory怎么办

另一题：安装程序 with dependecies，求出任一正确的安装顺序，follow up 求出安装顺序但是需要dependecies少的程序先安装

05-12

Onsite 1:  题目是两个人是否能通过6个人认识。一步步改进着做，期间纠正了一些小错误，然后也会提示着我需要改进，最后写完代码没用IDE跑，用例子在纸上跑了跑，然后说了说testcase。

Onsite 2:  然后问了k*k，8*8走k步0 0, 先dfs，再优化用dp，最后问了如果坐标是负数或者棋盘很大怎么办。都写了代码，运行看了结果（心好虚，生怕出来结果不对）。写的比较顺利，最后我问了一个问题，提前就走了，让我休息了会。

Onsite 3:  题目是假设1T的硬盘，内存只有200G，你怎么排序。其实就是merge k sorted list。写完之后又问如果很多数重复怎么办，经过提醒，国人大哥告诉我应该在merge的时候，对于每次从priorityque中poll后的那个对应的sorted list，对比下自己这个sorted list里后面的数是不是和当前的一样，一样的话直接加进总的list中就可以了。

05-08

Phone:  题目是做过的leetcode题目: construct bst from preorder and inorder traversal
然后要自己验证，也就是说建好bst后再preorder以及inorder traversal一遍来跟输入进行对比
follow up 是还要判断preorder 和 inorder 是否valid.

因为value是distinct的，我先是判断了是否inorder中preorder中没有的值或者preorder中有inorder中没有的值，还判断了inorder里面某的node的左（右）子树是否在preorder里面也是对应node的左（右）子树
只要在原程序中加一个if语句就能判断了

05-05

Onsite 1:  最后加了个Node class {private int snapId, private int count}, 用Collections.sort出结果
       extra:  他说你20分钟写好了，咱还有时间，你给我写个quicksort的实现吧，啪啪啪， bug free写好了， 说good job

Onsite 2:  Big integer addition and substraction。Big Integer加减，可正可负，听他描述完，有点想抽自己，看到有人说了类似题目的面经，但是说的是电面，就没准备，没想撞上了。题目大意： 传入一个String, 自己定定义BigInteger class的内部变量,  实现加减； 想了一下，本来想直接char arrar处理，发现把符号信息单独拿出来会简单很多， 所以就是BigInteger{int sign, int[] nums}, 然后就是实现， 两个数的符号
++, --, +-, -+, 分情况写，没有全部写完，就写好了＋＋， －－, 小哥说没时间了，你写几个testcase 先跑一下这个吧，testcase 通过， done.

另一题： Bigint实现加法。题目简单，最好代码一遍过

    String add(String s1, String s2){
    }

Follow up: support adding floating numbers

Onsite 3:  题目基本就是Leetcode 317, bug free搞定，然后小哥说你来想给足testcase跑一下吧，我想了几组case，凑了好一会，小哥也比较满意； 然后问我有什么问题，我就问了下snapchat 每个snap 信息比较难提取，你是怎么向各个不同用户推荐discovery / stories 里的snap的， 小哥回答了下.

Onsite 4:  题目和regular expression matching 有点像， 除了＊不在表示任意count, 而是1-100 的count， 我说直接暴力枚举各种可能的结果，比如碰到a* 就见一个list 包含所有可能，然后把 s 和 由 p生成的所有可能比较一次， 面试官问有没有更好的方法，细想了下，dp还是能写的，然后就写了下，调了下bug, 测了各种testcase， 过了

05-03

就是task scheduler, 跟之前的面经很像
例子：
Task A rely on Task B
Tash B rely on nothing
Task C rely on Task A
The correct order it B -> A -> C

有两个方法，excutate 和 getdependancied
题目就是给一个list of task return the correct order of it。
解法就是先找到没有dependancy的点。然后放进一个set里，再去找第二优先级set.containsall(task.getDependancies())，以此类推
LZ犯了一个超级低级sb的问题，估计应该是挂了。Fellowup应该是实现这个interface或者别的。。。

04-06

Onsite:  Task Scheduler，类似LC的course schedule那道题，用toplogical sort搞定

05-02

Phone:  array里只有一个数字出现超过50%，其他都只有一次。1. return超过50%次的数字。 follow up： array里只有一个数字出现超过一次，其他都只有一次。返回超过超过一次的数字的出现概率。要求：constant space, time: O(n).

04-19

Phone:  1维的frog跳石头问题
//    0   1    2   3     4     5    6    7     8    9    10

// {'F', 'R', 'R', 'R', 'W', 'W', 'R', 'W', 'R','W', 'O'};
input: F R R R R R W W R W O and velocity = 1
output: true/false
意思是有一只青蛙在 F然后他的 起始可以跳步数是1，但是他在每一个石头上有决定自己走 （+1， 0， -1）步的权
R是rock， W是water， F是起始，O是终点。
每次是能变1，能累加的。
比如你第一次是1， 第二次你选择+1， 那你第二次就是走 2步， 那第三次就只能选1， 2， 3， 不能走4之类的

比如这个例子青蛙可以从0->1(v=1) 然后1->3(v+1 = 2) 然后 3->6(v+1 = 3)然后6->8(v-1= 2)然后8->10(v = 2)
当然这是一个相当好的 test case，需要注意的是不要assume你要踩所有的石头。我开始没注意，后来才纠结出来。
简单写一下dp公式:
dp[v][i] = dp[i-(v+1)][v+1] || dp[i-(v-1)][v-1] || dp[i-v][v]

然后面试官follow up  2D的池塘，idea就是拿着终点位置和assume的velocity要写一个helper generate出所有可能的起点。 然后OR所有

04-15

Phone：给一个int的matrix，里面只有0和1，matrix[i][j]表示i和j是朋友，如果是0表示两人不是朋友，是朋友的分成一个组，问能分几组。比如1和2是朋友，3和他们都不是朋友，那么就是2组，return 2就可以。自己写test自己测

**可以用union find做，结果给了onsite
**也可以考虑bfs/dfs 是不是也能做出来，参考https://leetcode.com/problems/number-of-islands/

04-08

Onsite 1：题是从点A走到点B， 给K步，8个方向都可以走， 问多少种走法。我写了个backtracking 还把自己饶了进去， 大哥帮我walk through了 然后好不容易写完了。问怎么improve。然后说了DP的思路。没让写。

Onsite 2：题是跟SNAPCHAT一些功能相关的，提炼出来大概就是LRU

Onsite 3：题是XML parser 我写完了之后 让实现tokenizer gettoken这个function
第二个大概写完了  但是我最开始想错了 没想到每次只返回一个token， 所以用了个stack  然后其实不用。

另一题XML：题目是XML parser，follow up是一开始我们假设xml是well-formatted,如果不是的话，比如有不成对出现的<p>或者</p>，怎么破.

另一题XML： XML parser, build a map to represent XML given tokenizer.Next() -> (open,name), (inner,content), (close,name), 就是一个 tree transversal

另一题：XML paser，再次感谢面筋，不过有一点不同是需要设计data structure保存paser后的结果。 每个token有如下结构，然后给了个API getNextToken()获取下一个token, 我表示应该还有个
hasNextToken()。 and

    token {
      string name; // e.g. story, id, snaps
      string tag_type; // {open, close, test} 三种type
      };


上面的XML都是三种类型{open，close，text}

Onsite 4：问了两个人轮流取数组里的数那个题

04-06

Onsite：类似LC super ugly number
Onsite：8x8 grid k步之内从A到B有多少走法，经典面经题

另一题：在一个8*8的棋盘上给两个坐标和一个integer k，返回一共有多少种不同走法，走k步从一个坐标到另一个坐标。用dfs，然后问复杂度。然后follow up怎么降低复杂度。

另一个人的8x8面经解法：把DP和BFS结果都运行，对比一下。结果不一样:(，眼巴巴地瞅着经理，他说你这pre.swap(cur)啥意阿？我说交换赋值，他问难道交换完不要清一下cur么？我恍然大悟，改完，过。

其他面经题：

2. 写一个level order traversal
有另一题说，level order traversal，要求不要用recursive，用了bfs。

3. LeetCode 原题 Binary Tree Vertical Order Traversal

4. Implement a BigInt class，Implement the multiply method

5. LC Find median from data stream

6. valid BST 两种写

另一题有一个follow up：添加括号使得表达式值最大，表达式只有+ - *

7. construct binary tree from inorder and preorder 要考虑输入invalid的情况

8. 2Sum，3Sum，4Sum 微有点变化的是, array中数字是0-10, target也是0-10的. 要求输出在数组中最先遇到的 满足条件的pair (triplet...).

9. Word Ladder I 和返回一条路径 & Word Ladder II

12. word abbreviation

  题意：  我们通常压缩的时候会把  interval 压缩成 i8l, 即首尾字母加这个word的长度。
  1. 但是研究人员发现， internal 和 interval  如果按上面那种方法就会模糊不清，因为都会压缩成 i8l. 于是研究人员就想到一个办法，就是加长它们的prefix, 直到遇到它们第一个不同的字母，
  比如：internal 和 interval 会压缩成： intern8l, interv8l.
            intension 和 intrusion  会变成： inte9n, intr9n

  2. 当 压缩完后， 发现压缩后的长度 大于等于 原始长度时， 保留原始长度。比如 intern8l  长度也是 8， 那么就 保留原始： internal.
  3.
  input: 是一个 string

    like
    god
    internal
    me
    internet
    interval
    intension
    face
    intrusion

    output:
    l2e
    god
    internal
    me
    i8t
    interval
    inte9n
    f2e
    intr9n

14. 大致意思就是输入一串的double表示的sort好的timestamps, 然后一个double的windowSize, 请你找出一个起始时间区域，使得以这个范围的起始时间开始的[x, x + windowSize] 内有最多的timestamp;

   1. 我先给了queue的思路，然后每次碰到新的timestamp, remove所有之前的点，remove的时候更新pre,  然后check现在queue的size, 返回最大sizes时对应的(pre, queue.head]就是answer.
   2. 码完之后说，你有没有更好的思路，不要用O (n)的extra space, 我说用two pointers, 然后又吭呲吭呲地写，小哥说你其中有个地方又问题，我看了半天没发现，提示说，你有没有觉得windowSize
可能是负数。。。负数。。。
4. 你写几个unit test吧，我对java Unit test 不熟，然后愣了几愣，说我平常常做的就是给不同的输入，看输出的结果，小哥无奈。。
   ［求助大家，unit test  一般要怎么写啊，google了下，感觉好复杂］

15. 就是给了一个Person类，让实现打出这个Person的关系网中的所有朋友，Person有属性id, name和friendList, sample输出是这样子的：

    /* * Mike(1) {Mitch, Ryan}
    * Mitch(2) {Mike}
    * Ryan(3) {Mike, Lila}
    * Lila(4) {Ryan}
    * Mike.printFriendsGraph() : Mitch, Ryan, Lila */

17. Binary Search和一堆follow up

18.  Amicable pairs: Given a number n, return all amicable pairs (a, b) with a < n and b < n. The definition of amicable pairs is in http://mathworld.wolfram.com/AmicablePair.html 这个就写了O(sqrt(N) N)的暴力做, 但后来告知有O(NlogN)的... 不过真心没什么意思, 一共amicable pairs没几个.. 应该打表的...

另一题：find all amicable numbers.
输入一个正整数，找出所有小于这个数的amicable pairs。讨论了一下时间空间复杂度以及如何tradeoff，最后写了时间复杂度O(nlogn)，空间复杂度O(n)的算法。

另一题：给一个数n，返回所有amicable pair，要求pair中第一个数小于第二个数，然后问了问复杂度。

21. Tictactoe & Connect 4
题目： tic tac toe的m\*n版本，也就两个人是在一个m\*n的board上玩。（LZ最讨厌玩游戏了。。。） 规则如下：

（1）获胜方式依然是横竖对角线有三个连在一起的symbol。

（2）每次movement不能任意放置，只能放在 每一列 的 最下方的空白处，也就是说每个玩家每轮最多只有 n （行数）个选择。
要求实现以下API：

  （1）valid()。检查当前board是否有效，有效board必须满足
    (i) 没有人获胜
    (ii) 不能违背第二条规则。
  （2）nextMove()。返回当前玩家的任意一个movement，
    要求对手无法获胜，如果找不到报错（我选择了返回-1）

脑子实在累了，讨论了一下给出了bruteforce的方案。

1. valid主要难点在怎么判断已经有人赢了，LZ用check8个方向一共16个格子的方法，于是O(16\*N^2)。跟小哥交涉，表示常数可以减小，不过16也合理可以写。

2. 假设当前为player A， 则枚举A的n个选择，每个选择会对应B的n个选择，复杂度依然是O(16*N^2)。但实际上如果不保存board state，不管是A还是B都得先找到每一列放置的位置，每次都扫描一遍就会多出O(N)的时间，总时间会变成O(N^3)，所以需要保存一下状态。 加上一些细节的调整，最后写完但依然没时间测试debug了，两人一起表示过了一遍应该work。。。。

22. Word Pattern

s1，s2，s 分别代表string list1，string list2 和index list。两者根据index list，match就return true，不match就return False。我一上来先提出了直接历变的解法，集创建两个空string，根据index不断把两个string list里的string往两个空string里面写。小哥问我时间复杂度，我说O(n)，他说太general了，具体咧？懵逼了，真没了解那么深。后来提醒我说每次空string叠加也是耗时的，耗的时间跟被叠加的string有关。。。就是O(mn)。再问我空间复杂度，我说O(n)，还说general，最后也是O(mn)，让我改进我的算法用O(1)的空间复杂度。。。好吧，在不断交流和提醒中，写完了，用pointer，四个pointer，两个指现在的string，两个string里面的字母。但是时间也到了，我明白后面还有follow up，我没做成，第一轮扑街。

另一题：给两个string的数组和一个pattern数组，判断将两个string数组分别和pattern转化后的结果是否相同。例如s1={“abc”, “a”, “ccc”}, s2={“bc”, “aa”, “d”}, pattern={1, 0}，则s1和p的转化结果是“aabc”，s2和p的转化结果也是是“aabc”，则返回true。如果pattern是{0, 1}，则转化结果分别是“abca”, “bcaa”，则返回false。followup是，如果给定s1和s2，判断是否存在一个pattern使得转化结果一致。 过程中要求分析算法复杂度。

23. N queen I & II

24.   //Employee, Manager, ItemsSold
    //A, , 5
    //B, A, 3
    //C, B, 2
    //D, B, 3
    //E, A, 7

for each employee, calculate the number of items sold by himself and his org(all the employee reported to him)

print the results

另一题：给定一些输入如

    Employee,Manager,ItemsSold
    Alice,,5
    Bob,Alice,3
    Carol,Bob,2
    David,Bob,3
    Eve,Alice,2
    Ferris,Eve,1
    要求打印出这个样子
    Alice 16
        Bob 8
            Carol 2
            David 3
        Eve 3
            Ferris 1
楼主先自己设计数据结构，和第一面那个基本一样，只是多了一个int num来记录数量，根据输入构建树，注意这里每条记录给定的顺序是随机的，所以可能先出来David,Bob,3然后才是Bob,Alice,3。不注意的话可能会有小bug报错。然后postorder算出所有node的child的数量和，然后update自己的，之后preorder打印。写的时候有个小bug，改正之后通过。follow up要求打印成这个样子

    Alice 16
    |-Bob 8
    | |-Carol 2
    | \_David 3
    \_Eve 3
      \_Ferris 1

然后楼主就跪在这里了，怎么改都是有bug，最后也没改出来。最后面试官说，你的大方向是对的，只是你API设计的不够好，你如果把parent需要打印的prefix也传递给child，打印起来就非常方便了。楼主终于醒悟，刷题太多导致思维僵固了，另外这一面全程要coding并且编译运行。

25. LC 220 Contains duplicate II & III

27.  steam nums 返回 median

28. 给一串log（function, timestamp，act）, 在single thread的情况下输出各个function执行的时间段

29. 给一个List 实现iterator, 支持next(),delete(),hasNext()

30. LC find min in a rotated sorted array

31. LC 317 shortest distance from all buildings
相关链接：http://www.cnblogs.com/grandyang/p/5297683.html

32. Natural string sorting

是关于给一组string sort，规则是除了正常的按ascII字母排序，纯数字的比较需要看完整数字。这里有一些细节需要搞清楚，比如overflow以及首位为0的情况特殊处理

33. LC 382 linked list random node

输入是一串不断更新的数据流，要求输出是其中k个随机数据，每个出现过的数据被输出的概率相同。
楼主之前做过随机输出一个数据的类似题目，当时跟面试官交流的也不好，就直接照搬过来把一个随机输出复制了k遍，然后被告知输出数据不能重复。。。然后思路就卡住了，被提示后知道分两步走，第一步用随机函数得知每次一个新数据来了之后是否使用，第二步如果要使用该数据再用一个随机函数得知替换掉哪个原来存在的数据。
之后要求在电脑上自己写出来各种test case来检测函数的正确性

34. 刚面完 是国人大哥 题目 一个板子 一个起点 一个终点 移动按照中国象棋的马 要求输出一条最短移动路径

另一题：给一个n\*n 的chess board, knight可以跳 2\*3的格子的对角线，就是国际象棋的规则。求给出一个起始点，knight能否跳到给定的重点。BFS搞定。followup print出来路径，backtrace就可以了，把每个格子上个格子的方位存下来，允许使用额外空间。写完后跑了test

35. 给你你个数组，要你返回数组的最小值的平方是否小于最大值。题目很简单，需要注意的就是最小值的平方可能越界。
Follow up：如果这个数组不满足第一题中的条件，然后允许你执行“删除数组的第一个元素”的操作，让你返回要执行多少次，也就是删除多少个数组前面的元素后才能满足第一题中的条件。如果删完都不满足，返回-1；这一题小哥反复提示才想出来一个O（n）的做法，然后今天看还有个小bug，哎。。
接着Follow up：如果可以每次都可以选择删除第一个或者最后一个，问最少要删掉几次。。

35. LC 151 Reverse word in a String

36. LC 287 Find the Duplicate number

37. LC 95 Unique binary Search Tree II

38. closest point.

我们有一个data sets, 然后有一个graph是类似10 * 10的grid,写一个function, input是一个query point，求出离它最近的点
brute force是每个点distance求一下，后来改成了类似quad tree分成四个area的做法.

另一题：Given some points on a grid and point X, find the closest point to X

39. snap with wights, snap has next snaps list

input是start snap, max steps求出一个max total weights

BFS的方法做就可以.

follow up: start snap是一个list怎么办

follow up: 如果每个snap都可以是start nap怎么办， memorization search

40. LC 232 Implement queue using stack
follow up：是多线程版本，最后让我自己实现mutex那些，自己写测试，问了我如何设计测试等等。

41.  implement bloomfilter, construct, add, mightcontain, delete, extend(if near full, extend)

42. LC Repeated DNA Sequences

43. 两个人从1-N里面不重复地取数出来加在同一个sum上，第一个超过target的人赢，求先手是不是能赢。

44. 最后意思就是一段视频中有一些可以放广告的位置，长度不同，有一堆可以选的广告，长度也不同，问怎么放最多和最长的广告

45. 给一个string abbcba 按字符出现的频率编码，b->1, a->01, c->001，输出编码后的串 snapchat discover/moment 的一个应用抽像出来的，怎么判断发monment所属在自己的圈子里，就是相当于给一个多边形，怎么快速找到一个点在不在多边形里

46. 有一个task stream with value，实现一个class with member function 可以求出过去10s 的平均值，最大值，最小值。每个task生成按时间顺序。注意window是时间10s，不是task个数。 queue/deque解

47. Kth Largest Element in an array

48. bipartite graph的题

49. 就是给了两个text文档，去parse第一个文档中的每个字符，然后去判断能不能组成第二个text。很简单，用hashmap做就好了。小哥后来让我优化，说怎么样可以提前退出而不用走完第一篇text，我就给他写了一个flag，记录到第二个text结束的时候就直接退出，小哥很满意。

50. Leetcode的symmetric tree。这题我一开始上来用了最精简的方法，然后似乎大叔不太能follow，要我从最简单的BFS做一遍，然后又从DFS做一遍。现在回过头来总结，其实面试的时候不要一开始给出最优解，给出一个相对naive但是直观的解，然后逐步改进，这样可以向面试官展现你的thinking process，一上来就最优的，很多面试官都不是很喜欢的。followup就是各种DFS和BFS的tradeoff，主要是在social app的应用中。

51. 华人小哥，其实算法不是很复杂，按照长度和尾字幕分成bucket，然后没个bucket建trie，用trie来生成缩写。但是在讨论算法复杂度的时候我脑子犯浑了，不知道怎么搞的跟面试官为一个无所谓的复杂度讨论了半天，然后写代码的时间就所剩无几，写完了代码，面试官就问了问打算怎么测试就结束了。本轮面试官是manager，估计跪在这里了。

52. LC 328 Odd Even linked list

53. 在电脑上写的employee的class （class里有一个directreport的list， string name， name是相当于id，独一无二），然后实现method， input是employee ceo， string emp1, string emp2， 找到emp1和emp2共同的manager。

相关描述：给一个Employee类，有一个String name和一个List<Employee> directReport来表示一个公司的组织结构，然后给定一个公司的ceo和两个员工的名字，找到这两个员工的第一个common manager，给的两个员工一定存在。N-try tree的first common ancestor。楼主就用最naive的方法先找到从根到target节点的path然后在两个path中找第一个common ancestor。在电脑上写代码和测试样例，改掉测试样例的一个小bug之后通过。要求优化，说了用postorder traversal的方法来找，这样只需要遍历树一遍，说了一下整体的过程没有coding。之后问在一个很大的social network中，给两个个名字，如何快速的找到名字对应的node然后再去找他们的common friends。楼主提了一下hash，consistent hash然后就没啥了，不熟悉DHT没办法啊。还是自己准备不够充分，好多东西需要了解。

54. 一个double array， 让输出能使用＊，＋， 以及（）得到的maximum。 follow up，如果有<0的怎么处理

55. 然后出了magzine里找massage的题目

57. 题目是input一个text file，里面是last name, first name, mm/dd/yy, manager's full name这样的格式，按照他的要求parse然后按照hierarchy print出来

58. LC 337House Robber III，题目是你要举办一个party，给你一些人和他们的上下级关系，如果你邀请了一个人就不能邀请他的直接上级或者直接下级，问怎样邀请能使邀请的所有人的级别加起来和最高（比如CEO是10级然后VP9级这样，类似每个人有一个分数）。

另一题：题目是这样的：一棵树，代表上司和员工的关系，然后每个节点都有一个对应的权值。然后公司开了一个party，为了让员工们更好的交流，有个规定，如果上司去参加party，那么他的直接下属（直接孩子节点)就不去（同理，如果下属去了，直接上司，父节点就不去）。然后设计一个算法，参加party的人的权值总和最高。这是一道动态规划题，思路是每次计算一个员工去的权值之和与不去的权值之和，从叶子开始。

59. 1. Valid Sudoku 2. Sudoku Solver

60. 先写个reverse linked list，follow up如果有环怎么办，然后是level order traversal，最后还有时间就问了一个如何用4G内存sort 100G数据，假设CPU速度很快可以忽略，瓶颈是硬盘读写速度（50M/S），问只有一块硬盘的话估计要用多少时间，如果有两块硬盘如何优化。

相关：后半部分在讨论如何用4G的RAM sort硬盘里100G文件的问题，可以加额外的硬盘，要尽量使用时尽量短

61.  给如下结构

    class ChainSnap {
      List recipients;
      boolean hasCycle();
      }

让实现其中的hasCycle()。实际就是有向图判断有没cycle，用dfs加两个hashset判断globally visited 和 temporarily visited。 小哥问能不能不用额外的数据结构（那两个hashset）,但可以把以上的class修改一下。LZ说可以加两个boolean变量在class里。小哥问了两种方法在空间消耗上的差异，然后问能不能再减少空间的开销。。后来提示说那两个变量可能的值只有几种组合，然后提示用enum类型。然后让LZ写了用enum的那种方法的代码。

62. LC 30 Substring with Concatenation of All Words

Given List<word>, String para, 返回包涵所有word最短的一段话,返回String
先把word简化成character来做的

63.  在terminal里输入文件名的一部分然后按tab补全，求能找到target文件要输入string的最短长度

64.  然后做题，给定一个grid matrix，就是类似围棋盘那种东西。然后某些grid（放棋子的地方）上面有点，给定一个query点的位置，返回k nearest点on this grid matrix。第一开始我assume给了个list，里面是自己设计的一个结构体，记录了坐标和距离query点的距离，然后写了个comparator来sort这个list，然后返回k个node。之后要求优化到O(n)，楼主就写了quick selection。之后要求再优化，然后楼主就**了，尼玛这是要让我写kd-tree的节奏，这东西曾经在普利斯顿的算法公开课写过一次，之后就再也没碰过了，果断回避之。就设计了一种逐渐膨胀的正方形的方法，不过这种方法有bug，返回的不一定是k nearest，我也指出了可能哪些情况不work，但是面试官还是让我写了，我也就写了

65.  Given a M X N grid, a random cell in the grid (coordinate <a, b> for example), find number of ways you can reach top-left corner in k steps, assuming you can move in any direction.

66.  问题是假定给个屏幕和一些屏幕坐标和渲染单个像素点的API，要求设计一个渲染class, 能实现当手指点下去的时候开始渲染，手指拖动过程中渲染以屏幕一角和手指作为对角线的一个长方形（这个长方形可以根据手指的运动扩大缩小），最终当手指离开屏幕的时候，以手指最后位置为准，留下most recent的那个长方形。小哥在整个过程中除了回答clarification以外一直不出声，edege case都是LZ一边写一边找出来的。。。

67.  给一个数组，A,B轮流从头尾处选出一个数字，求当B使用（1）贪心和（2）最优策略时，A能取到所有数字之和最大。我使用的recursive写的，优化用的是hash 存储从子数组（i, j）上能得到的最优解。写了几个test跑过了

68. 通过二维数组来建一颗四叉树。四叉树的叶子节点来自二维数组相邻的上左下右四个方块的值。建树规则是，四个节点的都是0，则父节点也是0，如果四个节点都是1，则父节点也是1.如果四个节点既有0，又有1，则父节点是2.如果四个节点都是2，则父节点是1.(规则有点复杂，一些细节我可能忘记了，但大体是这样）我是用递归的方式建树的。但因为代码量太大，导致我这一轮没完成编码。所以大概挂在这里了。

69.  题目： ternary expression paser （三目运算符）， input是一个string，其中 ‘T’ 表示true， ‘F’ 表示false， 要求返回最后运算的结果。 乍一看题目很直接， bool expression ? first result : second result ，但实际上我们通常都用的都是非常简单的形式，但每一部分都可以无限嵌套。例如： T ? T : F ? T : 1 : 2 : F ? 3 : 4; 原本妹子没让我考虑bool expression部分也嵌套的情况，结果我本着把问题分析清楚的原则，成功把问题弄的复杂了，她后来觉得这可以作为follow up。。。 说了两三个简单的solution，然后举例发现有问题。在妹子的提示下，写出了 “不考虑 bool expression”的情况，但是因为已经说出口了，妹子指出我还需要继续考虑。最终时间不够，没有运行代码。 过后发现，确实应该多在纸上找一下规律，理清逻辑在写解法。string的变式题对我来说比较tricky

70.  一堆数，中间插入*，+或者括号，求最大值，dp就可以， 但是如果数字全部是正整数的话，只用通过判断1的个数是奇数还是偶数来求最大值，0(n)就可以了

71. LC 10 Regax

72.   class Throttler {
        int qps;
        public Throttler(int qps) {
        }
        pubilc boolean allowAccess() {
        }
    }

给这么一个class实现rate limiter，allowAccess()返回的事当前时间的access能不能被批准
举个栗子：

    qps是2
    request1 time 0.0 return true;
    request2 time 0.5 return true;
    request3 time 0.6 return false;

73.  第三轮
1.给一个单核CPU的log，parse log，每一行log三列分别是jobname(String)    start/end(boolean)    timeStamp(long)

name(String) |   start/end(boolean)   | timeStamp(long)
-------------|------------------------|----------------
f1           |        start           |            0
f2           |        start           |            2
f3           |        start           |            4
f3           |        end             |            5
f2           |        end             |            8
f1           |        end             |            9


    上面log的意思是我们在0开始做f1
    在2的时候切换到f2,
    4的时候开始做f3，
    5的时候f3结束
    要返回每个function要用的时间
    这个input的返回就是
    f1 ： 3
    f2 ： 5
    f3 ： 1



Behavior: （Culture fit很重要）

1. 如果snapchat要加一个feature应该加什么? How can snapchat improve?
2. 喜欢的和不喜欢的snapchat feature，why？
3. Why snapchat？
https://www.quora.com/What-is-it-like-to-work-at-Snapchat

SNAPCHAT
Now in its fifth year, Snapchat’s becoming known for more than just its fast-disappearing messages. Over 100 million daily active users view over 7 billion videos every day. Now music combines with Live Stories to bring viewers glimpses of Coachella, the iHeartRadio Music Festival, and 2015 MTV Video Music Awards among others. BuzzFeed, National Geographic, Comedy Central and others have signed on to bring short form content to the millions of millennials who are more attached to their mobiles than ever.

The exponential growth has Snapchat’s ranks swelling. Currently, dozens of jobs are listed from tech to HR, finance, operations, and legal. A video on its site highlights the company's culture which some of the staff described as fun and crazy, in part because Snapchat’s home base in Venice Beach, California, while far from Silicon Valley, is equally informal. The video frequently makes mention of coworkers being like family, and indeed Snapchat’s job descriptions emphasize collaboration and ability to work well with others, which extends beyond engineering to roles in other departments such as finance.

You wouldn’t necessarily put entrepreneurial skills down for a job in payroll, for example, but it’s important to team Snapchat. As one job description puts it:

"We are looking for candidates with the highest performance standards, who are proactive, and driven by results. We are looking for leaders who have built a consistent career of excellence and achievement in both the workplace and academic environment, can execute well and flourish in an entrepreneurial environment, and can work across and up and down a dynamic organization.''

4. 在谈到Ad的时候问我是否了解**Snapchat Geofilter的广告策略**，我当时蒙了，本来做了功课好像看过他们推出了广告Geofilter，但是随口答了一个on-demond geofilter
5. 看一下snapchat里discover功能
6. Talk about 1 or 2 past projects.    SWIFT 写的App

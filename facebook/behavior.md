Behavior Question (Tell the story interesting and limit the time in 2 minutes)
Situation, Action, Results
1. Why FB? Why you like FB? 
2. 最喜欢的facebook feature是什么？Which part of it should be improved?（设计题）
3.  What project would like to work on？
4. 以前的project有没有什么conflict with your co-worker（技术上的冲突，需要detail）
 Answer: 1) Willing to communicate with others         
                2) Double check your answers.
                3) Understand other people's motivation. Put yourself in the others' shoes
3. 有没有什么failed project/most interesting project/most challenge project?
4. Where do you see yourself in five years?
5. What are your weaknesses?
    What are the areas where you need to improve your skills?
    Are there areas where you need to develop your skills further?
6. What do you like least about your previous job/internship?
    What do you dislike the most about your last job?
7. What do you wish you had done differently at your previous company?
    What you have learned from the previous experience?
8. Teamwork experience
9. Your current project and how you scale your applications
10. FB specifically (vs. other companies)



Front-end Interview Questions
1. Given two identical DOM trees (not the same one), and a node from one of them find the node in the other one.  

2. Flatten array. This array can have multiple types: {}, [], "", undefined, null, 123 are all valid types inside the array. 

3. Given a grid of characters output a decoded message. The message for the following would be IROCKA. (diagonally down right and diagonally up right if you can't go further .. you continue doing this)

I B C A L K A
D R F C A E A
G H O E L A D  

4. We have an array of objects A and an array of indexes B. Reorder objects in array A with given indexes in array B. Do not change array A's length. 
example:
var A = [C, D, E, F, G];
var B = [3, 0, 4, 1, 2];

sort(A, B);
// A is now [D, F, G, C, E];

5. 第一部分：html/css

实现以下功能

// Mouse is not over the picture.
+-------------+
|                    |
|                    |
|   picture      |
|                    |
|                    |
+-------------+

// Mouse is anywhere over picture
+--------+----+
|              |edit| <--- links to /edit.php
|             +----+      icon url: /edit_icon.png. 鍥磋鎴戜滑@1point 3 acres
|   picture       |
|                     | <--- links to /profile.php
|                     |      picture url: /profile_pic.png

+-------------+

注意审题，默认时候edit不会出现，只有mouse hover的时候才有；（如何默认隐藏edit？三种方法，哪个比较好？）
想想什么时候用img，什么时候用background-image;
还有如果你用div把picture包起来，把div丢到body后，你要设置display，否则的话，div的width会和body同宽，导致之后如果再用position来定位edit的话，基准就是body的宽度； 
followup：如果考虑accessibility的话，需要添加什么；如果没有鼠标，只有键盘的时候如何实现上述功能（此时就要考虑到如果用display: none来隐藏的话，tab不能focus，中间还牵扯到一些focus和hover能否bubble的问题）。

面试小哥很好，一直给提示，问得很细。

第二部分：
-----------------------------------------------------

    A            B
    / \           / \
  O   O     O   O
        /|\          /|\
     x O O    y O O
y = find(A, B, x);

有两个dom，A和B，要求返回B中所对应的(x在A中的值)，也就是说，找出x在A中的位置，然后返回在B中对应位置的值。

这个得要求复习一下dom的api，以前我们老用框架，特别是jQuery，所以一些基本的东西平时也没接触到。例如：
node.children. more info on 1point3acres.com
node.nextSibling
node.parentNode. 1point3acres.com/bbs

这个题目可以用递归做，但是费时间，平均要遍历一半nodes，那用什么方法比较好呢，这里给大家留个小作业吧。
另外一个就是node.children是一个类似于array但又不是array，如何变成array？
Followup：如果只是找index的话，不需要生成新array，在node.children里面如何找到某个点的index？

6.  find the max number in array 
answer: Math.apply(math, array);

7. 一道css hover的题目

8. flatten nested array， 去google一下，有很多标答

9. 实现一个function， repeat("x", a) ---> xxxxx， 能有多少种解法，就给多少种解法，最快的是logn的

10. culture fit + css，不难，知道relative position, absolute position什么的就可以了

11. design email subscribe，披着design的皮，其实考的是data structure， javascript中的hashtable.



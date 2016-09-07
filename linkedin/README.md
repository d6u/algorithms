## 2016-04-12 （front-end）

1. nested array, 例如[1,2,[3,4,[5,[6]],7],8,9]，要求一次性输出[1,2,3,4,5,6,7,8,9]，直接iterator方法，本来还想着用generator，后来克制住没有作。

2. leetcode 20 Valid Parentheses，中间有个follow up，我一开始的程序是（、【、{逐一判断，大哥说我要是有500个不同的parentheses的表达怎么办？直接dictionary（hashmap）预存啊！

3. given a tree structrue {'s1':'([])','s2:{s3:'{[(]}'}','s4':''}, 判断这个given tree是否是valid tree（即里面的元素都是valid parentheses）

## 2016-08-05

1. Valid Number

## 2016-08-02

1. Shortest Word Distance II
2. Nested List Weight Sum

## 2016-07-30

mid stack。 例如push 1,3,6,5,4. 返回6。返回index的中值 用双链表做,maintain一个pointer指向中间
follow up是写popMid()函数

Solution: http://www.geeksforgeeks.org/design-a-stack-with-find-middle-operation/

Design a stack with operations on middle element
How to implement a stack which will support following operations in O(1) time complexity?

1) push() which adds an element to the top of stack.
2) pop() which removes an element from top of stack.
3) findMiddle() which will return middle element of the stack.
4) deleteMiddle() which will delete the middle element.

Push and pop are standard stack operations.

Deleting an element from middle is not O(1) for array. Also, we may need to move the middle pointer up when we push an element and move down when we pop(). In singly linked list, moving middle pointer in both directions is not possible.

Following is C implementation of push(), pop() and findMiddle() operations. Implementation of deleteMiddle() is left as an exercise. If there are even elements in stack, findMiddle() returns the first middle element. For example, if stack contains {1, 2, 3, 4}, then findMiddle() would return 2.

```cpp
/* Program to implement a stack that supports findMiddle() and deleteMiddle
   in O(1) time */
#include <stdio.h>
#include <stdlib.h>

/* A Doubly Linked List Node */
struct DLLNode
{
    struct DLLNode *prev;
    int data;
    struct DLLNode *next;
};

/* Representation of the stack data structure that supports findMiddle()
   in O(1) time.  The Stack is implemented using Doubly Linked List. It
   maintains pointer to head node, pointer to middle node and count of
   nodes */
struct myStack
{
    struct DLLNode *head;
    struct DLLNode *mid;
    int count;
};

/* Function to create the stack data structure */
struct myStack *createMyStack()
{
    struct myStack *ms =
               (struct myStack*) malloc(sizeof(struct myStack));
    ms->count = 0;
    return ms;
};

/* Function to push an element to the stack */
void push(struct myStack *ms, int new_data)
{
    /* allocate DLLNode and put in data */
    struct DLLNode* new_DLLNode =
               (struct DLLNode*) malloc(sizeof(struct DLLNode));
    new_DLLNode->data  = new_data;

    /* Since we are adding at the begining,
      prev is always NULL */
    new_DLLNode->prev = NULL;

    /* link the old list off the new DLLNode */
    new_DLLNode->next = ms->head;

    /* Increment count of items in stack */
    ms->count += 1;

    /* Change mid pointer in two cases
       1) Linked List is empty
       2) Number of nodes in linked list is odd */
    if (ms->count == 1)
    {
         ms->mid = new_DLLNode;
    }
    else
    {
        ms->head->prev = new_DLLNode;

        if (ms->count & 1) // Update mid if ms->count is odd
           ms->mid = ms->mid->prev;
    }

    /* move head to point to the new DLLNode */
    ms->head  = new_DLLNode;
}

/* Function to pop an element from stack */
int pop(struct myStack *ms)
{
    /* Stack underflow */
    if (ms->count  ==  0)
    {
        printf("Stack is empty\n");
        return -1;
    }

    struct DLLNode *head = ms->head;
    int item = head->data;
    ms->head = head->next;

    // If linked list doesn't become empty, update prev
    // of new head as NULL
    if (ms->head != NULL)
        ms->head->prev = NULL;

    ms->count -= 1;

    // update the mid pointer when we have even number of
    // elements in the stack, i,e move down the mid pointer.
    if (!((ms->count) & 1 ))
        ms->mid = ms->mid->next;

    free(head);

    return item;
}

// Function for finding middle of the stack
int findMiddle(struct myStack *ms)
{
    if (ms->count  ==  0)
    {
        printf("Stack is empty now\n");
        return -1;
    }

    return ms->mid->data;
}

// Driver program to test functions of myStack
int main()
{
    /* Let us create a stack using push() operation*/
    struct myStack *ms = createMyStack();
    push(ms, 11);
    push(ms, 22);
    push(ms, 33);
    push(ms, 44);
    push(ms, 55);
    push(ms, 66);
    push(ms, 77);

    printf("Item popped is %d\n", pop(ms));
    printf("Item popped is %d\n", pop(ms));
    printf("Middle Element is %d\n", findMiddle(ms));
    return 0;
}
```

## 2016-03-15

1. _367. Valid Perfect Square_

2. find the index of first element greater than given target in sorted integer array.  If all elements are no greater than the last element, wrap to position 0.

    Clarification for 2:

    E.G sorted array = [1,2,3,4,5,5], target = 5, instead of return 6 = length_of_array, you need to return the first element (position 0). Same case for target = 7 in this arr...

## 2016-07-22

1. 50. Pow(x, n)

2. 版上常见的那个interval题目， 要实现一个接口，实现addInterval和getTotalCoverage两个函数。 基本算是leetcode的两个interval题目的变种， 第一遍bug free写了一个add O(n)和get O(1)的方法， 然后交流了一下之后做了些小优化。 followup是问有没有让add方法更efficient的写法, 然后我说了下add O(1), get O(nlogn)的方法， 然后又讨论了一些优化的问题。

## 2016-06-08

1. maximum product subarray
2. rotate array

## 2016-03-03 （博士电面）

1. Leetcode 205 Isomorphic Strings

## 2016-02-07

先是一些关于java的基础题目，比如说 `==` 和 `equals` 的区别；2者分别什么时候用；如果override equals的话，还要override什么其他方法吗？如果equals返回true，但是hashcode返回的int不一样，会有什么后果；接着问了一些OS的核心概念，比如说京城和线程的区别，2者的应用场景之类的；最后大哥问了2个问题

1. check whether a binary tree is self-mirroed
2. 不好意思忘了，vaguelly recalled related to binary tree。

## 2016-02-27

1. int sqrt(int n) 2分搞定

## 2016-01-27

1. Given an array, shuffle it. API: `void shuffle(vector<int> &nums)`

    a. When do shuffling, how to make sure each num is picked equally? Prove it.
    b. How many permutation can you get?

2. How to generate a performance report for a given URL? What to save, how to represent the result?

## Leetcode相关题

LC1TwoSum
LC12IntegerToRoman
LC13RomanToInteger
LC20ValidParentheses
LC21MergeTwoSortedLists
**LC33SearchRotatedSortedArray**
LC50Powerxn
LC53MaximumSubarray
LC53MaximumSubarrayLI
LC56MergeIntervals
LC65ValidNumber
LC69SqrtX
LC77PlaceFlowers
**LC81SearchRotatedSortedArrayII**
LC88MergeSortedArray
LC100SameTre
LC102BinaryTreeLevelOrderTraversal
LC122SingleValidBinaryTree
LC150EvaluateReversePolishNotation
LC152MaximumProductSubarray
LC156BinaryTreeUpsideDown
LC160IntersectionTwoLinkedLists.
LC170TwoSumIII
LC186ReverseWordsStringII
LC186WordLadder
LC187RepeatedDNASequences
LC189RotateArray
LC205IsomorphicStrings
LC215KthLargestArray
LC235LowestCommonAncestorBinaryTree
LC235LowestCommonAncestorII
LC243ShortestWordDistance
LC244ShortestWordDistanceII
LC245ShortestWordDistanceIII
**LC254MyFactors**
LC277FindCelebrity
LC339SumNestedList
LC347TopKFrequentElements
LC366PrintTreeLeaf

## 非LeetCode题

[BoundedBlockingQueue](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/BlockingQueue.html)

GenericClass

LinkedList Single 2 Double

[MaximumDepthBinaryTree](http://www.programcreek.com/2014/05/leetcode-maximum-depth-of-binary-tree-java/)

### MaximumIntervalsOverlap

    Example:

    ```
    Input: arrl[] = {1, 2, 9, 5, 5}
           exit[] = {4, 5, 12, 9, 12}
    First guest in array arrives at 1 and leaves at 4,
    second guest arrives at 2 and leaves at 5, and so on.

    Output: 5
    There are maximum 3 guests at time 5.
    ```

    An Efficient Solution is to use sorting n O(nLogn) time. The idea is to consider all events (all arrivals and exits) in sorted order. Once we have all events in sorted order, we can trace the number of guests at any time keeping track of guests that have arrived, but not exited.

    ```cpp
    // Program to find maximum guest at any time in a party
    #include<iostream>
    #include<algorithm>
    using namespace std;

    void findMaxGuests(int arrl[], int exit[], int n)
    {
       // Sort arrival and exit arrays
       sort(arrl, arrl+n);
       sort(exit, exit+n);

       // guests_in indicates number of guests at a time
       int guests_in = 1, max_guests = 1, time = arrl[0];
       int i = 1, j = 0;

       // Similar to merge in merge sort to process
       // all events in sorted order
       while (i < n && j < n)
       {
          // If next event in sorted order is arrival,
          // increment count of guests
          if (arrl[i] <= exit[j])
          {
              guests_in++;

              // Update max_guests if needed
              if (guests_in > max_guests)
              {
                  max_guests = guests_in;
                  time = arrl[i];
              }
              i++;  //increment index of arrival array
          }
          else // If event is exit, decrement count
          {    // of guests.
              guests_in--;
              j++;
          }
       }

       cout << "Maximum Number of Guests = " << max_guests
            << " at time " << time;
    }

    // Driver program to test above function
    int main()
    {
        int arrl[] = {1, 2, 10, 5, 5};
        int exit[] = {4, 5, 12, 9, 12};
        int n = sizeof(arrl)/sizeof(arrl[0]);
        findMaxGuests(arrl, exit, n);
        return 0;
    }
    ```

[MirrorTree](http://www.geeksforgeeks.org/write-an-efficient-c-function-to-convert-a-tree-into-its-mirror-tree/)

    (1)  Call Mirror for left-subtree    i.e., Mirror(left-subtree)
    (2)  Call Mirror for right-subtree  i.e., Mirror(right-subtree)
    (3)  Swap left and right subtrees.
              temp = left-subtree
              left-subtree = right-subtree
              right-subtree = temp

    ```java
    // Java program to convert binary tree into its mirror

    /* Class containing left and right child of current
       node and key value*/
    class Node
    {
        int data;
        Node left, right;

        public Node(int item)
        {
            data = item;
            left = right = null;
        }
    }

    class BinaryTree
    {
        Node root;

        void mirror()
        {
            root = mirror(root);
        }

        Node mirror(Node node)
        {
            if (node == null)
                return node;

            /* do the subtrees */
            Node left = mirror(node.left);
            Node right = mirror(node.right);

            /* swap the left and right pointers */
            node.left = right;
            node.right = left;

            return node;
        }

        void inOrder()
        {
            inOrder(root);
        }

        /* Helper function to test mirror(). Given a binary
           search tree, print out its data elements in
           increasing sorted order.*/
        void inOrder(Node node)
        {
            if (node == null)
                return;

            inOrder(node.left);
            System.out.print(node.data + " ");

            inOrder(node.right);
        }

        /* testing for example nodes */
        public static void main(String args[])
        {
            /* creating a binary tree and entering the nodes */
            BinaryTree tree = new BinaryTree();
            tree.root = new Node(1);
            tree.root.left = new Node(2);
            tree.root.right = new Node(3);
            tree.root.left.left = new Node(4);
            tree.root.left.right = new Node(5);

            /* print inorder traversal of the input tree */
            System.out.println("Inorder traversal of input tree is :");
            tree.inOrder();
            System.out.println("");

            /* convert tree to its mirror */
            tree.mirror();

            /* print inorder traversal of the minor tree */
            System.out.println("Inorder traversal of binary tree is : ");
            tree.inOrder();

        }
    }
    ```

[NearestPoints2D](http://www.geeksforgeeks.org/closest-pair-of-points/)

QuickSort

RightRotateTree

[ThreeClosestElements](http://www.geeksforgeeks.org/find-three-closest-elements-from-given-three-sorted-arrays/)

TinyURL

[Triangle](http://quiz.geeksforgeeks.org/puzzle-21-3-ants-and-triangle/) ???

TriangleII ???

MultiSum ???

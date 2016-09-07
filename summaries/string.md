# String

- [022-generate-parenthesis.java](./leetcode-java/022-generate-parenthesis.java)

    Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

- [320-generalized-abbreviation.java](./leetcode-java/320-generalized-abbreviation.java)

    Write a function to generate the generalized abbreviations of a word. E.g. Given word = "word", return the following list (order does not matter): `["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]`

- [241-different-ways-to-add-parentheses.java](./leetcode-java/241-different-ways-to-add-parentheses.java)

    Given a string of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. The valid operators are +, - and *.

- [backtrack + memorization 10ms](./leetcode-java/294-flip-game-ii.java), [backtrack 200ms](./leetcode-java/294-flip-game-ii_backtrack.java), [dynamic programing + game theory 2ms](./leetcode-java/294-flip-game-ii_dp.java)

    You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner. Write a function to determine if the starting player can guarantee a win.

- [247-strobogrammatic-number-ii.java](./leetcode-java/247-strobogrammatic-number-ii.java)

    A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down). Find all strobogrammatic numbers that are of length = n.

- 005-longest-palindromic-substring: [dp](./leetcode-java/005-longest-palindromic-substring_dp.java), [normal](./leetcode-java/005-longest-palindromic-substring.java)

    Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.

- [017-letter-combinations-of-a-phone-number.java](./leetcode-java/017-letter-combinations-of-a-phone-number.java)

    Given a digit string, return all possible letter combinations that the number could represent.

- [043-multiply-strings.java](./leetcode-java/043-multiply-strings.java)

    Given two numbers represented as strings, return multiplication of the numbers as a string.

    - The numbers can be arbitrarily large and are non-negative.
    - Converting the input string to integer is NOT allowed.
    - You should NOT use internal library such as BigInteger.

- [071-simplify-path.java](./leetcode-java/071-simplify-path.java)

    Given an absolute path for a file (Unix-style), simplify it.

- **Review** [091-decode-ways.java](./leetcode-java/091-decode-ways.java)

    A message containing letters from A-Z is being encoded to numbers using the following mapping:

    ```
    'A' -> 1
    'B' -> 2
    ...
    'Z' -> 26
    ```

    Given an encoded message containing digits, determine the total number of ways to decode it.

- [093-restore-ip-addresses.java](./leetcode-java/093-restore-ip-addresses.java)

    Given a string containing only digits, restore it by returning all possible valid IP address combinations.

- [127-word-ladder.java](./leetcode-java/127-word-ladder.java)

    Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

    - Only one letter can be changed at a time
    - Each intermediate word must exist in the word list

- [131-palindrome-partitioning.java](./leetcode-java/131-palindrome-partitioning.java)

    Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

- [139-word-break.java](./leetcode-java/139-word-break.java)

    Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

- [150-evaluate-reverse-polish-notation.java](./leetcode-java/150-evaluate-reverse-polish-notation.java)

    Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, /. Each operand may be an integer or another expression.

- [151-reverse-words-in-a-string.java](./leetcode-java/151-reverse-words-in-a-string.java)

    Given an input string, reverse the string word by word.

- [161-one-edit-distance.java](./leetcode-java/161-one-edit-distance.java)

    Given two strings S and T, determine if they are both one edit distance apart.

- [186-reverse-words-in-a-string-ii.java](./leetcode-java/186-reverse-words-in-a-string-ii.java)

    Given an input string, reverse the string word by word. A word is defined as a sequence of non-space characters. The input string does not contain leading or trailing spaces and the words are always separated by a single space.Could you do it in-place without allocating extra space?

- **Review** 227-basic-calculator-ii: [normal](./leetcode-java/227-basic-calculator-ii.java), [rpn](./leetcode-java/227-basic-calculator-ii_rpn.java)

    [Shunting yard algorithm](https://en.wikipedia.org/wiki/Shunting-yard_algorithm)

    Implement a basic calculator to evaluate a simple expression string. The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

- [267-palindrome-permutation-ii.java](./leetcode-java/267-palindrome-permutation-ii.java)

    Given a string s, return all the palindromic permutations (without duplicates) of it. Return an empty list if no palindromic permutation could be form.

- [271-encode-and-decode-strings.java](./leetcode-java/271-encode-and-decode-strings.java)

    Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

    - The string may contain any possible characters out of 256 valid ascii characters. Your algorithm should be generalized enough to work on any possible characters.
    - Do not use class member/global/static variables to store states. Your encode and decode algorithms should be stateless.
    - Do not rely on any library method such as eval or serialize methods. You should implement your own encode/decode algorithm.

- [306-additive-number.java](./leetcode-java/306-additive-number.java)

    Additive number is a string whose digits can form additive sequence. A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two. Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.

- [386-lexicographical-numbers.java](./leetcode-java/386-lexicographical-numbers.java)

    Given an integer n, return 1 - n in lexicographical order. For example, given 13, return: `[1,10,11,12,13,2,3,4,5,6,7,8,9]`. Please optimize your algorithm to use less time and space. The input size may be as large as 5,000,000.

- [388-longest-absolute-file-path.java](./leetcode-java/388-longest-absolute-file-path.java)

    Suppose we abstract our file system by a string in the following manner:

    The string `dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext` represents:

    ```
    dir
        subdir1
        subdir2
            file.ext
    ```

    The directory dir contains an empty sub-directory `subdir1` and a sub-directory `subdir2` containing a file `file.ext`.

    The string `dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext` represents:

    ```
    dir
        subdir1
            file1.ext
            subsubdir1
        subdir2
            subsubdir2
                file2.ext
    ```

    The directory dir contains two sub-directories `subdir1` and `subdir2`. `subdir1` contains a file `file1.ext` and an empty second-level sub-directory `subsubdir1`. `subdir2` contains a second-level sub-directory `subsubdir2` containing a file `file2.ext`.

    We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is `dir/subdir2/subsubdir2/file2.ext`, and its length is 32 (not including the double quotes).

    Given a string representing the file system in the above format, return the length of the longest absolute path to file in the abstracted file system. If there is no file in the system, return 0.

    Note:

    - The name of a file contains at least a `.` and an extension.
    - The name of a directory or sub-directory will not contain a `.`.

- [385-mini-parser.java](./leetcode-java/385-mini-parser.java)

    Given a nested list of integers represented as a string, implement a parser to deserialize it. Each element is either an integer, or a list -- whose elements may also be integers or other lists.

    Note: You may assume that the string is well-formed:

    String is non-empty.
    String does not contain white spaces.
    String contains only digits 0-9, [, - ,, ].

    ## Example 1:

    Given s = "324", you should return a NestedInteger object which contains a single integer 324.

    ## Example 2:

    Given s = "[123,[456,[789]]]", return a NestedInteger object containing a nested list with 2 elements:

    1. An integer containing value 123.
    2. A nested list containing two elements:
        i.  An integer containing value 456.
        ii. A nested list with one element:
             a. An integer containing value 789.

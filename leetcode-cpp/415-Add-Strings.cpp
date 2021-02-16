/*
    Given two non-negative integers num1 and num2 represented as string, 
    return the sum of num1 and num2.
*/

class Solution {
public:
    string addStrings(string num1, string num2) {
        int carry = 0;
        string str;
        for (int i = num1.size() - 1, j = num2.size() - 1; i >= 0 || j >= 0; i--, j--) {
            int x = i >= 0 ? num1[i] - '0' : 0;
            int y = j >= 0 ? num2[j] - '0' : 0;
            int digit = (x + y + carry) % 10;
            carry = (x + y + carry) / 10;
            str = (char)('0' + digit) + str;
        }
        if (carry == 1) {
            str = (char)('0' + carry) + str;
        }
        return str;
    }
};

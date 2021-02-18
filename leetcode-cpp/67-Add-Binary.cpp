/*
    Given two binary strings a and b, return their sum as a binary string.
*/

class Solution {
public:
    string addBinary(string a, string b) {
        string result = "";
        int carry = 0;
        for (int i = a.size() - 1, j = b.size() - 1; i >= 0 || j >= 0; i--, j--) {
            int x = i >= 0 ? a[i] - '0' : 0;
            int y = j >= 0 ? b[j] - '0' : 0;
            result.insert(0, 1, '0' + ((x + y + carry) & 1));
            carry = (x + y + carry) >> 1;
        }
        if (carry == 1) {
            result.insert(0, 1, '1');
        }
        return result;
    }
};

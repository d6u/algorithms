/*
    Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
*/

class Solution {
public:
    int getSum(int a, int b) {
        while (b != 0) {
            int x = a ^ b;
            int y = (unsigned)(a & b) << 1;
            a = x;
            b = y;
        }
        return a;
    }
};

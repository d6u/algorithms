/* The read4 API is defined in the parent class Reader4.
      int read4(char[] buf); */

public class Solution extends Reader4 {

    private int index = 0;
    private int count = 0;
    private char[] buffer = new char[4];

    /**
     * @param buf Destination buffer
     * @param n   Maximum number of characters to read
     * @return    The number of characters read
     */
    public int read(char[] buf, int n) {
        int i = 0;

        while (i < n) {
            if (index == 0) {
                count = read4(buffer);
            }

            if (count == 0) {
                break;
            }

            while (i < n && index < count) {
                buf[i] = buffer[index];
                i++;
                index++;
            }

            if (index == count) {
                index = 0;
            }
        }

        return i;
    }
}

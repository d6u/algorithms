public class Solution {
    public int minArea(char[][] image, int x, int y) {
        int left   = search(image, 0    , y              , 0   , image.length, true , true);
        int right  = search(image, y + 1, image[0].length, 0   , image.length, true , false);
        int top    = search(image, 0    , x              , left, right       , false, true);
        int bottom = search(image, x + 1, image.length   , left, right       , false, false);

        return (right - left) * (bottom - top);
    }

    private int search(char[][] image, int i, int j, int lower, int upper, boolean isCol, boolean moveLeft) {
        while (i < j) {
            int mid = (i + j) / 2;
            int k = lower;
            while (k < upper && isWhite(image, k, mid, isCol)) {
                k++;
            }
            if (moveLeft == k < upper) {
                j = mid;
            } else {
                i = mid + 1;
            }
        }

        return i;
    }

    private boolean isWhite(char[][] image, int fix, int change, boolean isCol) {
        return image[isCol ? fix : change][isCol ? change : fix] == '0';
    }
}

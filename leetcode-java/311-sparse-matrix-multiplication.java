public class Solution {
    public int[][] multiply(int[][] A, int[][] B) {
        int rowLenA = A.length;
        int colLenA = A[0].length;
        int colLenB = B[0].length;
        int[][] C = new int[rowLenA][colLenB];

        for(int rowA = 0; rowA < rowLenA; rowA++) {
            for(int colA = 0; colA < colLenA; colA++) {
                if (A[rowA][colA] != 0) {
                    for (int colB = 0; colB < colLenB; colB++) {
                        if (B[colA][colB] != 0) {
                            C[rowA][colB] += A[rowA][colA] * B[colA][colB];
                        }
                    }
                }
            }
        }

        return C;
    }
}

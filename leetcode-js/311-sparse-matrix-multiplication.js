/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function(A, B) {
    const result = Array(A.length).fill(null).map(() => Array(B[0].length).fill(0));

    const indexA = [];

    for (let i = 0; i < A.length; i += 1) {
        indexA[i] = [];
        for (j = 0; j < A[0].length; j += 1) {
            if (A[i][j] !== 0) {
                indexA[i].push(j, A[i][j]);
            }
        }
    }

    for (let i = 0; i < indexA.length; i += 1) {
        for (let j = 0; j < indexA[i].length; j += 2) {
            const col = indexA[i][j];
            const val = indexA[i][j+1];

            for (let k = 0; k < B[0].length; k += 1) {
                result[i][k] += B[col][k] * val;
            }
        }
    }

    return result;
};

// console.log(multiply([[1,0,0],[-1,0,3]], [[7,0,0],[0,0,0],[0,0,1]]))
console.log(multiply([[1,-5]], [[12],[-1]]));

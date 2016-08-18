/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function(A, B) {
    const result = Array(A.length).fill().map(() => Array(B[0].length).fill(0));

    for (let rowA = 0; rowA < A.length; rowA += 1) {
        for (let colA = 0; colA < A[0].length; colA += 1) {
            if (A[rowA][colA] !== 0) {
                for (let colB = 0; colB < B[0].length; colB += 1) {
                    if (B[colA][colB] !== 0) {
                        result[rowA][colB] += A[rowA][colA] * B[colA][colB];
                    }
                }
            }
        }
    }

    return result;
};

console.log(multiply([[1,0,0],[-1,0,3]], [[7,0,0],[0,0,0],[0,0,1]]))
console.log(multiply([[1,-5]], [[12], [-1]]));

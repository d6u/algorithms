'use strict';

function sort(A, B) {
    let i = 0;
    while (i < A.length) {
        if (B[i] !== i) {
            swap(A, B[i], i);
            swap(B, B[i], i);
        } else {
            i += 1;
        }
    }
}

function swap(arr, a, b) {
    const t = arr[a];
    arr[a] = arr[b];
    arr[b] = t;
}

const A = ['C', 'D', 'E', 'F', 'G'];
const B = [3, 0, 4, 1, 2];

sort(A, B);

console.log(A);

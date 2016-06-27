'use strict';

function quickSort(arr, l, r) {
    l = l == null ? 0 : l;
    r = r == null ? arr.length - 1 : r;
    if (r - l > 0) {
        const i = partition(arr, l, r);
        quickSort(arr, l, i - 1);
        quickSort(arr, i + 1, r);
    }
}

function partition(arr, l, r) {
    const pivot = arr[r];
    for (let i = l; i < r; i += 1) {
        if (arr[i] <= pivot) {
            swap(arr, l, i);
            l += 1;
        }
    }
    swap(arr, l, r);
    return l;
}

function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

let input = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(input);
console.log(input);

'use strict';

function flat(arr) {
    const res = [];
    for (const el of arr) {
        if (Array.isArray(el)) {
            res.push(...flat(el));
        } else {
            res.push(el);
        }
    }
    return res;
}

console.log(flat([1,2,3,4,[5,6,[7,[8,[{}, null, undefined]]]]]))

function flatIterative(arr) {
    const res = [];
    const stack = [[0, arr]];

    while (stack.length) {
        let [i, a] = stack.pop();
        while (i < a.length) {
            if (Array.isArray(a[i])) {
                stack.push([i + 1, a]);
                stack.push([0, a[i]]);
                break;
            } else {
                res.push(a[i]);
                i += 1;
            }
        }
    }

    return res;
}

console.log(flatIterative([1,2,3,4,[5,6,[7,[8,[{}, null, undefined]]]]]))

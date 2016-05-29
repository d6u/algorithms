'use strict';

function levenshteinEditDistance(a, b) {
    if (a === b) {
        return 0;
    }

    if (a.length === 0) {
        return b.length;
    }

    if (b.length === 0) {
        return a.length;
    }

    let v0 = Array.apply(null, Array(a.length + 1)).map((_, i) => i);
    let v1 = [];

    for (let i = 0; i < b.length; i++) {
        v1[0] = i + 1;
        for (let j = 0; j < a.length; j++) {
            const cost = a[j] === b[i] ? 0 : 1;
            v1[j + 1] = Math.min(
                v1[j] + 1,     // delete char from b
                v0[j + 1] + 1, // insert char to b
                v0[j] + cost   // substitute
            );
        }

        console.log(v0, v1);

        for (let j = 0; j <= b.length; j++) {
            v0[j] = v1[j];
        }

        console.log(v0, v1);
    }

    return v1[b.length];
}

// console.log(levenshteinEditDistance('horse', 'ros'));
console.log(levenshteinEditDistance('ros', 'horse'));

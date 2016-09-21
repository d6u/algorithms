'use strict';

function repeat(char, n) {
    if (n === 1) {
        return char;
    }

    const half = Math.floor(n / 2);

    if (n % 2 === 0) {
        return repeat(char, half) + repeat(char, half);
    } else {
        return repeat(char, half) + repeat(char, half) + char;
    }
}

console.log(repeat('x', 10).length);
console.log(repeat('x', 20).length);
console.log(repeat('x', 50).length);
console.log(repeat('x', 55).length);
console.log(repeat('x', 1).length);

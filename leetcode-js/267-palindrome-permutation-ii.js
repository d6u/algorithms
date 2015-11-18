/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function(s) {
    'use strict';

    const counts = countChar(s);

    let oddChar;
    let chars = [];

    for (let pair of counts.entries()) {
        let char = pair[0];
        let count = pair[1];
        if (count % 2 !== 0) {
            if (oddChar) {
                return [];
            }
            oddChar = char;
        }
        let numOfChar = Math.floor(count / 2);
        while (numOfChar > 0) {
            chars.push(char);
            numOfChar -= 1;
        }
    }

    const solutions = permuteUnique(chars);

    return solutions
      .map(sol => {
          if (oddChar) {
            return sol.concat([oddChar]).concat(reverse(sol));
          } else {
            return sol.concat(reverse(sol));
          }
      })
      .map(sol => sol.join(''));
};

function countChar(s) {
    'use strict';

    const counts = new Map();

    for (let char of s) {
        let count = counts.get(char);
        counts.set(char, count == null ? 1 : count + 1);
    }

    return counts;
}

function permuteUnique(chars) {
    chars.sort();
    const results = [];
    getPermutationResults([], chars, new Map(), results);
    return results;
}

function getPermutationResults(solution, chars, usedMap, results) {
    'use strict';

    if (usedMap.size === chars.length) {
        results.push(solution);
        return;
    }

    for (let i = 0; i < chars.length; i++) {
        if (!usedMap.get(i)) {
            if (i > 0 && chars[i] === chars[i-1] && !usedMap.get(i-1)) {
                continue;
            }
            usedMap.set(i, true);
            getPermutationResults(solution.concat([chars[i]]), chars, usedMap, results);
            usedMap.delete(i);
        }
    }
}

function reverse(arr) {
    return arr.slice(0).reverse();
}

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (!t.length || !s.length) {
        return '';
    }

    const needToFind = {};
    const found = {};

    for (const c of t) {
        if (!needToFind[c]) {
            needToFind[c] = 0;
        }
        needToFind[c]++;
    }

    let count = t.length;
    let start = 0;
    let min = Infinity;
    let j = 0;

    for (let i = 0; i < s.length; i++) {
        const c = s[i];

        if (needToFind[c] == null) {
            continue;
        }

        if (found[c] == null) {
            found[c] = 0;
        }

        found[c]++;

        if (found[c] <= needToFind[c]) {
            count--;
        }

        if (count > 0) {
            continue;
        }

        let leftC = s[j];

        while (needToFind[leftC] == null || found[leftC] > needToFind[leftC]) {
            if (found[leftC] > needToFind[leftC]) {
                found[leftC]--;
            }
            j++;
            leftC = s[j];
        }

        if (i - j + 1 < min) {
            min = i - j + 1;
            start = j;
        }
    }

    return count === 0 ? s.substr(start, min) : '';
};

console.log(minWindow("ADOBECODEBANC", "ABC"))

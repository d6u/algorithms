/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let i = 0;
    let j = 0;
    let star = -1;
    let mark = -1;

    // 1. Loop through each character
    while (i < s.length) {
        // 2. See if same char or ?
        if (j < p.length && (s[i] === p[j] || p[j] === '?')) {
            i += 1;
            j += 1;
        } else if (j < p.length && p[j] === '*') {
            // 3. See if pattern is *
            star = j; // star position
            j += 1;

            // mark position in s, to skip star matched characters
            // when comes back to star position
            mark = i;
        } else if (star !== -1) {
            // 4. No match, go back to last star position
            j = star + 1;
            i = mark;

            // increase start matched characters
            mark += 1;
        } else {
            return false;
        }
    }

    // 5. Match all * at the ends, at this point all char are matched in s
    while (j < p.length && p[j] === '*') {
        j += 1;
    }

    // 6. See if all char has been used in p
    return j === p.length;
};

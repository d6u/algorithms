/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    const map = new Map();
    let left = 0;
    let best = 0;

    for (let i = 0; i < s.length; i += 1) {
        const char = s[i];
        const count = map.get(char);
        map.set(char, count ? count + 1 : 1);

        while (map.size > k) {
            const leftChar = s[left];
            // Don't need to check map.has(leftChar) first
            map.set(leftChar, map.get(leftChar) - 1);
            if (map.get(leftChar) === 0) {
                map.delete(leftChar);
            }
            left += 1;
        }

        best = Math.max(best, i - left + 1);
    }

    return best;
};

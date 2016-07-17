/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    if (words.length < 2) {
        return [];
    }

    const result = [];
    const map = new Map();

    // 1. Save each word and its index
    for (let i = 0; i < words.length; i += 1) {
        map.set(words[i], i);
    }

    // 2. Loop all words
    for (let i = 0; i < words.length; i += 1) {
        // 3. Loop all possible sub string of a word
        for (let j = 0; j <= words[i].length; j += 1) {
            const str1 = words[i].substring(0, j);
            const str2 = words[i].substring(j);

            // 4. If the first part is palindrome, the other word must be a
            // reverse of the last part
            if (isPalindrome(str1)) {
                const str2rvs = str2.split('').reverse().join('');
                if (map.has(str2rvs) && map.get(str2rvs) !== i) {
                    result.push([map.get(str2rvs), i]);
                }
            }

            // 4. If the last part is palindrome (when not ""),
            // the other word must be a reverse of the first part
            if (str2.length > 0 && isPalindrome(str2)) {
                const str1rvs = str1.split('').reverse().join('');
                if (map.has(str1rvs) && map.get(str1rvs) !== i) {
                    result.push([i, map.get(str1rvs)]);
                }
            }
        }
    }

    return result;
};

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left <= right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left += 1;
        right -= 1;
    }
    return true;
}

console.log(palindromePairs(["abcd","dcba","lls","s","sssll"]));

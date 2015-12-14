/**
    tags: two pointers, string

    Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

    For example,
    "A man, a plan, a canal: Panama" is a palindrome.
    "race a car" is not a palindrome.

    Note:
    Have you consider that the string might be empty? This is a good question to ask during an interview.

    For the purpose of this problem, we define empty string as valid palindrome.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length === 0 || s.length === 1) {
        return true;
    }

    s = s.toLowerCase();

    var l = 0;
    var r = s.length - 1;

    while (l < r) {
        if (isValidChar(s[l])) {
            l += 1;
            continue;
        }

        if (isValidChar(s[r])) {
            r -= 1;
            continue;
        }

        if (s[l] !== s[r]) {
            return false;
        }

        l += 1;
        r -= 1;
    }

    return true;
};

const ZERO = '0'.charCodeAt(0);
const NINE = '9'.charCodeAt(0);
const A = 'a'.charCodeAt(0);
const Z = 'z'.charCodeAt(0);

function isValidChar(char) {
    return char.charCodeAt(0) < ZERO ||
        (NINE < char.charCodeAt(0) && char.charCodeAt(0) < A) ||
        Z < char.charCodeAt(0);
}

var r = isPalindrome("1a2");

console.log(r);

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const REGEX = /[aeiou]/i;
    const chars = s.split('');
    const vowels = chars.filter(char => REGEX.test(char));
    return chars.map(char => REGEX.test(char) ? vowels.pop() : char).join('');
};

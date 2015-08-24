/**
 * @param  {string}   s
 * @param  {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  var allPos = [];

  if (!s.length) return allPos;

  var wordCount = words.length;
  var wordLength = words[0].length;
  var totalLength = wordCount * wordLength;

  if (s.length < totalLength) return allPos;

  var wordCounter = new Map();
  var word;
  var i;
  var count;

  for (i = 0; i < wordCount; i++) {
    word = words[i];
    if ((count = wordCounter.get(word)) != null) {
      wordCounter.set(word, count + 1);
    } else {
      wordCounter.set(word, 1);
    }
  }

  for (i = 0; i <= s.length - totalLength; i++) {
    if (check(s, i, wordCounter, wordLength, wordCount)) {
      allPos.push(i);
    }
  }

  return allPos;
};

function check(s, start, wordCounter, wordLength, wordCount) {
  var i;
  var word;
  var found = new Map();
  var count;

  for (i = 0; i < wordCount; i++) {
    word = s.substr(start + i * wordLength, wordLength);

    if (!wordCounter.has(word)) return false;

    if ((count = found.get(word)) != null) {
      found.set(word, count + 1);
    } else {
      found.set(word, 1);
    }

    if (found.get(word) > wordCounter.get(word)) return false;
  }

  return true;
}

findSubstring("barfoothefoobarman", ["foo","bar"]);

/**
 * @param  {string[]} words
 * @param  {number}   maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  if (!words.length) {
    return [];
  }

  if (!words[0].length) {
    return [makeSpace(maxWidth)];
  }

  var result = [];
  var i = 0;
  var curLen;
  var start = 0;
  var end;
  var isLast = false;

  while (true) {
    curLen = words[i].length;

    i += 1;

    if (i === words.length) {
      isLast = true;
    } else {
      while (curLen + 1 + words[i].length <= maxWidth) {
        curLen += 1 + words[i].length;
        i += 1;

        if (i === words.length) {
          isLast = true;
          break;
        }
      }
    }

    end = i;

    if (end === start) break;

    if (isLast) {
      result.push(concatWords(words.slice(start), maxWidth, true));
      break;
    } else {
      result.push(concatWords(words.slice(start, end), maxWidth, false));
      start = end;
    }
  }

  return result;
};

function concatWords(words, maxWidth, isLast) {
  var s;

  if (words.length === 1) {
    return words[0] + makeSpace(maxWidth - words[0].length);
  }

  if (isLast) {
    s = words.join(' ');
    return s + makeSpace(maxWidth - s.length);
  }

  var totalSpace = maxWidth - words.join('').length;
  var spaceLen = totalSpace / (words.length - 1) | 0;
  var remainLen = totalSpace % (words.length - 1);
  var space = makeSpace(spaceLen);

  if (remainLen === 0) {
    return words.join(space);
  }

  var i;
  s = '';

  for (i = 0; i < words.length - 1; i++) {
    s += words[i] + space;
    if (remainLen > 0) {
      s += ' ';
      remainLen -= 1;
    }
  }

  return s + words[i];
}

function makeSpace(len) {
  var s = '';
  for (var i = 0; i < len; i++) {
    s += ' ';
  }
  return s;
}

console.log(fullJustify(["a","b","c","d","e"], 3));

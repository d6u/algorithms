/**
 * Definition for read4()
 *
 * @param  {character[]} buf Destination buffer
 * @return {number}      The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param  {function} read4()
 * @return {function}
 */
var solution = function(read4) {

  var temp = [];

  /**
   * @param  {character[]} buf Destination buffer
   * @param  {number}      n   Maximum number of characters to read
   * @return {number}      The number of characters read
   */
  return function read(buf, n) {
    var buf4;

    if (temp.length < n) {
      do {
        buf4 = [];
        read4(buf4);
        temp.push.apply(temp, buf4);
        if (buf4.length < 4) {
          break;
        }
      } while (temp.length < n);
    }

    var len = Math.min(temp.length, n);
    var cur = temp.splice(0, len);

    buf.push.apply(buf, cur);

    return len;
  };
};

var r = [];

console.log(solution((buf4) => 0)(r, 1));

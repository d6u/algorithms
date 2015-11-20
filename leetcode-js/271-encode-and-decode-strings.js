/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    var encoded = '';
    for (var str of strs) {
        var len = str.length;
        encoded += len.toString() + '@' + str;
    }
    return encoded;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    var r = [];
    var head = 0;
    while (head < s.length) {
        var atPos = s.indexOf('@', head);
        var len = parseInt(s.substr(head, atPos - head));
        head = atPos + 1;
        r.push(s.substr(head, len));
        head += len;
    }
    return r;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

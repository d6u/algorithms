/**
 * @param {string} s
 * @return {boolean}
 */
var canWin = function(s) {
    return _canWin(s.split(''));
};

function _canWin(chars) {
    for (let i = 0; i < chars.length - 1; i += 1) {
        if (chars[i] === '+' && chars[i+1] === '+') {
            chars[i] = '-';
            chars[i+1] = '-';
            const win = !_canWin(chars);
            chars[i] = '+';
            chars[i+1] = '+';
            if (win) {
                return true;
            }
        }
    }

    return false;
}

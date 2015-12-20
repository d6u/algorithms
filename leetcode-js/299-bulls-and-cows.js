/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var bulls = 0;
    var cows = 0;
    var numbers = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0,
        0
    ];

    for (var i = 0; i < secret.length; i++) {
        var s = parseInt(secret[i]);
        var g = parseInt(guess[i]);
        if (s === g) {
            bulls += 1;
        } else {
            if (numbers[s] < 0) {
                cows += 1;
            }
            if (numbers[g] > 0) {
                cows += 1;
            }
            numbers[s] += 1;
            numbers[g] -= 1;
        }
    }

    return `${bulls}A${cows}B`;
};

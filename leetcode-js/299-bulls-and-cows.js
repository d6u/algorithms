/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bull = 0;
    let cow = 0;
    const map = Array(10).fill(0);

    for (let i = 0; i < secret.length; i += 1) {
        if (secret[i] === guess[i]) {
            bull += 1;
        } else {
            if (map[secret[i]] < 0) {
                cow += 1;
            }
            if (map[guess[i]] > 0) {
                cow += 1;
            }
            map[secret[i]] += 1;
            map[guess[i]] -= 1;
        }
    }

    return `${bull}A${cow}B`;
};

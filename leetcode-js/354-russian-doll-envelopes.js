/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    if (!envelopes.length) {
        return 0;
    }

    envelopes.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        } else {
            return a[0] - b[0];
        }
    });

    const dp = [envelopes[0][1]];

    for (const envelope of envelopes.slice(1)) {
        if (envelope[1] > dp[dp.length-1]) {
            dp.push(envelope[1]);
        } else {
            for (let i = 0; i < dp.length; i += 1) {
                if (dp[i] >= envelope[1]) {
                    dp.splice(i, 1, envelope[1]);
                    break;
                }
            }
        }
    }

    return dp.length;
};

console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]));

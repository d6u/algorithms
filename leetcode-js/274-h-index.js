/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort(function (a, b) {
       return b - a;
    });

    var i;

    for (i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            if (i + 1 < citations.length) {
                if (citations[i+1] <= i + 1) {
                    return i + 1;
                }
            } else {
                return i + 1;
            }
        }
    }

    return 0;
};

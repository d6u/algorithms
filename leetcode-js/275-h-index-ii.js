/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var i;
    var len = citations.length;

    for (i = len - 1; i >= 0; i--) {
        if (citations[i] >= len - i) {
            if (i - 1 >= 0) {
                if (citations[i-1] <= len - i) {
                    return len - i;
                }
            } else {
                return len - i;
            }
        }
    }

    return 0;
};

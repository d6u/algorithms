/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    for (let i = citations.length - 1; i >= 0; i -= 1) {
        if (citations[i] >= citations.length - i) {
            if (i > 0) {
                if (citations[i-1] <= citations.length - i) {
                    return citations.length - i;
                }
            } else {
                return citations.length;
            }
        } else {
            break;
        }
    }

    return 0;
};

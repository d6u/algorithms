/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => b - a);

    for (const [i, n] of citations.entries()) {
        if (n >= i + 1) {
            if (i + 1 < citations.length) {
                if (citations[i+1] <= i + 1) {
                    return i + 1;
                }
            } else {
                return i + 1;
            }
        } else {
            break;
        }
    }

    return 0;
};
console.log(hIndex([6,5,3,1,0]))

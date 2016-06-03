class WordDistance {
    /**
     * @constructor
     * @param {string[]} words
     */
    constructor(words) {
        this.map = new Map();

        for (const [index, word] of words.entries()) {
            const indices = this.map.get(word);
            if (!indices) {
                this.map.set(word, [index]);
            } else {
                indices.push(index);
            }
        }
    }

    /**
     * @param {string} word1
     * @param {string} word2
     * @return {integer}
     */
    shortest(word1, word2) {
        const indices1 = this.map.get(word1);
        const indices2 = this.map.get(word2);
        let minDistance = Infinity;
        let i1 = 0;
        let i2 = 0;

        while (i1 < indices1.length && i2 < indices2.length) {
            minDistance = Math.min(minDistance, Math.abs(indices1[i1] - indices2[i2]));
            if (indices1[i1] < indices2[i2]) {
                i1 += 1;
            } else {
                i2 += 1;
            }
        }

        return minDistance;
    }
}

/**
 * Your WordDistance object will be instantiated and called as such:
 * var wordDistance = new WordDistance(words);
 * wordDistance.shortest("word1", "word2");
 * wordDistance.shortest("anotherWord1", "anotherWord2");
 */

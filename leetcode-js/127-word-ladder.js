const A = 'a'.charCodeAt(0);

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let head = new Set();
    let tail = new Set();

    head.add(beginWord);
    tail.add(endWord);

    let phead;
    let ptail;

    let dist = 2;

    while (head.size && tail.size) {
        if (head.size < tail.size) {
            phead = head;
            ptail = tail;
        } else {
            phead = tail;
            ptail = head;
        }

        const temp = new Set();

        for (const word of phead) {
            wordList.delete(word);

            for (let i = 0; i < word.length; i += 1) {
                for (let c = 0; c < 26; c += 1) {
                    const tempWord = replace(word, i, String.fromCharCode(A + c));
                    if (ptail.has(tempWord)) {
                        return dist;
                    } else if (wordList.has(tempWord)) {
                        temp.add(tempWord);
                        wordList.delete(tempWord);
                    }
                }
            }
        }

        dist += 1;

        if (head.size < tail.size) {
            head = temp;
        } else {
            tail = temp;
        }
    }

    return 0;
};

function replace(str, i, char) {
    return str.substring(0, i) + char + str.substring(i + 1);
}

// console.log(ladderLength("a", "c", new Set(["a","b","c"])));
console.log(ladderLength("hot", "dog", new Set(["hot","dog"])));

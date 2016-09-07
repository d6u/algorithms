/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    if (words.length === 1) {
        return words[0];
    }

    const graph = {};

    for (let i = 1; i < words.length; i++) {
        const w1 = words[i-1];
        const w2 = words[i];
        let found = false;

        for (let j = 0; j < Math.max(w1.length, w2.length); j++) {
            if (w1[j] && !graph[w1[j]]) {
                graph[w1[j]] = [];
            }
            if (w2[j] && !graph[w2[j]]) {
                graph[w2[j]] = [];
            }
            if (w1[j] && w2[j] && w1[j] !== w2[j] && !found) {
                graph[w1[j]].push(w2[j]);
                found = true;
            }
        }
    }

    const path = [];

    for (const key of Object.keys(graph)) {
        if (path.indexOf(key) > -1) {
            continue;
        }
        if (!topSort(key, graph, [], path)) {
            return '';
        }
    }

    return path.join('');
};

function topSort(node, graph, visited, path) {
    if (visited.indexOf(node) > -1) {
        return false;
    }
    if (path.indexOf(node) > -1) {
        return true;
    }
    visited.push(node);
    for (const char of graph[node]) {
        if (!topSort(char, graph, visited, path)) {
            return false;
        }
    }
    path.unshift(node);
    visited.pop(node);
    return true;
};

var r = alienOrder(["ri","xz","qxf","jhsguaw","dztqrbwbm","dhdqfb","jdv","fcgfsilnb","ooby"]);

console.log(r);

/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
    if (words.length === 1) {
        return words[0];
    }

    var w1;
    var w2;
    var i;
    var j;
    var found;
    var graph = {};

    for (i = 1; i < words.length; i++) {
        w1 = words[i-1];
        w2 = words[i];
        found = false;

        for (j = 0; j < Math.max(w1.length, w2.length); j++) {
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

    var path = [];
    var keys = Object.keys(graph);

    for (var key of keys) {
        if (path.indexOf(key) > -1) {
            continue;
        }
        if (!topSort(key, graph, [], path)) {
            return '';
        }
    }

    return path.join('');
};

var topSort = function (node, graph, visited, path) {
    if (visited.indexOf(node) > -1) {
        return false;
    }
    if (path.indexOf(node) > -1) {
        return true;
    }
    visited.push(node);
    for (var char of graph[node]) {
        if (!topSort(char, graph, visited, path)) {
            return false;
        }
    }
    path.unshift(node);
    visited.pop(node);
    return true;
};

var r = alienOrder(["a","b","a"]);

console.log(r);

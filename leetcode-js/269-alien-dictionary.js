// graph, topological sort, strings

/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
    if (words.length === 1) return words[0];

    var i;
    var w1;
    var w2;
    var j;
    var f;
    var g = {};

    for (i = 1; i < words.length; i++) {
        w1 = words[i-1];
        w2 = words[i];
        f = false;

        for (j = 0; j < Math.max(w1.length, w2.length); j++) {
            if (w1[j] && !g[w1[j]]) g[w1[j]] = [];
            if (w2[j] && !g[w2[j]]) g[w2[j]] = [];
            if (w1[j] && w2[j] && w1[j] !== w2[j] && !f) {
                g[w1[j]].push(w2[j]);
                f = true;
            }
        }
    }

    var path = [];
    var keys = Object.keys(g);

    for (i = 0; i < keys.length; i++) {
        if (path.indexOf(keys[i]) > -1) continue;
        if (!topSort(keys[i], g, [], path)) {
            return '';
        }
    }

    return path.join('');
};

var topSort = function (node, graph, visited, path) {
    if (visited.indexOf(node) > -1) return false;
    if (path.indexOf(node) > -1) return true;
    visited.push(node);
    for (var i = 0; i < graph[node].length; i++) {
        if (!topSort(graph[node][i], graph, visited, path)) {
            return false;
        }
    }
    path.unshift(node);
    visited.pop(node);
    return true;
};

var r = alienOrder(["a","b","a"]);

console.log(r);

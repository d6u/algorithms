/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    'use strict';

    if (n === 1) {
        return [0];
    }

    let adj = [];

    for (let i = 0; i < n; i++) {
        adj.push(new Set());
    }

    for (let edge of edges) {
        adj[edge[0]].add(edge[1]);
        adj[edge[1]].add(edge[0]);
    }

    let leaves = [];

    for (let i = 0; i < n; i++) {
        if (adj[i].size === 1) {
            leaves.push(i);
        }
    }

    while (n > 2) {
        n -= leaves.length;
        let newLeaves = [];
        for (let i of leaves) {
            let j = adj[i][Symbol.iterator]().next().value;
            adj[i].delete(j);
            adj[j].delete(i);
            if (adj[j].size === 1) {
                newLeaves.push(j);
            }
        }
        leaves = newLeaves;
    }

    return leaves;
};

const r1 = findMinHeightTrees(6, [[0,1],[0,2],[0,3],[3,4],[4,5]]);

console.log(r1);

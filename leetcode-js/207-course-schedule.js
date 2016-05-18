/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    'use strict';

    const graph = [];
    const degree = [];

    for (let i = 0; i < numCourses; i += 1) {
        degree[i] = 0;
        graph[i] = [];
    }

    for (const prerequisite of prerequisites) {
        const next = prerequisite[0];
        const prer = prerequisite[1];
        degree[next] += 1;
        graph[prer].push(next);
    }

    const isolated = [];

    for (const entry of degree.entries()) {
        const i = entry[0];
        const count = entry[1];
        if (count === 0) {
            isolated.push(i);
        }
    }

    let count = 0;

    while (isolated.length) {
        count += 1;
        const course = isolated.pop();
        for (const next of graph[course]) {
            degree[next] -= 1;
            if (degree[next] === 0) {
                isolated.push(next);
            }
        }
    }

    return count === numCourses;
};

console.log(canFinish(8,
  [
    [1,0],
    [2,1],
    [0,3],
    [3,1]
  ]));

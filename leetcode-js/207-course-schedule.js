/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var graph = {};
    var degree = [];
    var isolated = [];
    var i;
    var edge;
    var count = 0;
    var course;

    for (i = 0; i < numCourses; i++) {
        degree[i] = 0;
        graph[i] = [];
    }

    for (i = 0; i < prerequisites.length; i++) {
        edge = prerequisites[i];
        degree[edge[0]] += 1;
        graph[edge[1]].push(edge[0]);
    }

    for (i = 0; i < degree.length; i++) {
        if (!degree[i]) {
            isolated.push(i);
        }
    }

    while (isolated.length) {
        count += 1;
        course = isolated.pop();
        for (i = 0; i < graph[course].length; i++) {
            degree[graph[course][i]] -= 1;
            if (!degree[graph[course][i]]) {
                isolated.push(graph[course][i]);
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

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  'use strict';

  let indegrees = [];
  let isolated = [];
  let map = new Map();

  for (let i = 0; i < numCourses; i += 1) {
    indegrees[i] = 0;
    map.set(i, []);
  }

  for (let pair of prerequisites) {
    indegrees[pair[0]] += 1;
    map.get(pair[1]).push(pair[0]);
  }

  for (let i = 0; i < indegrees.length; i += 1) {
    if (indegrees[i] === 0) {
      isolated.push(i);
    }
  }

  let counter = 0;
  let course;

  while ((course = isolated.shift()) != null) {
    counter += 1;

    for (let neighbour of map.get(course)) {
      indegrees[neighbour] -= 1;
      if (indegrees[neighbour] === 0) {
        isolated.push(neighbour);
      }
    }
  }

  return numCourses === counter;
};

console.log(canFinish(8,
  [
    [1,0],
    [2,1],
    [0,3],
    [3,1]
  ]));

/**
 * @param  {number[]}   candidates
 * @param  {number}     target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  var results = [];
  candidates.sort(function (a, b) {
    return a - b;
  });
  makeResult([], 0, 0, candidates, target, results);
  return results;
};

function makeResult(cur, sum, index, candidates, target, results) {
  if (sum === target) {
    results.push(cur);
    return;
  } else if (sum > target) {
    return;
  }

  var i;
  var e;
  for (i = index; i < candidates.length; i += 1) {
    e = candidates[i];
    if (i > index && e === candidates[i - 1]) continue;
    makeResult(cur.concat([e]), sum + e, i + 1, candidates, target, results);
  }
}

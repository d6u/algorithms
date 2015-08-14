/**
 * @param  {number[]}   candidates
 * @param  {number}     target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  var result = [];
  getResults([], 0, candidates, 0, target, result);
  return result;
};

function getResults(cur, sum, candidates, index, target, result) {
  if (sum === target) {
    result.push(cur);
    return;
  }

  var i;
  for (i = index; i < candidates.length; i++) {
    if (sum + candidates[i] <= target) {
      getResults(
        cur.concat([candidates[i]]),
        sum + candidates[i],
        candidates,
        i,
        target,
        result);
    }
  }
}

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  var start = 0;
  var netGas = 0;
  var curGas = 0;
  var l = gas.length;
  var i;

  for (i = 0; i < l; i++) {
    netGas += gas[i] - cost[i];
    curGas += gas[i] - cost[i];
    if (curGas < 0) {
      start = i + 1;
      curGas = 0;
    }
  }

  if (netGas < 0) return -1;
  return start;
};

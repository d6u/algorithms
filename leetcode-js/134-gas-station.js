/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let start = 0;
    let netGas = 0;
    let curGas = 0;

    for (let i = 0; i < gas.length; i += 1) {
        netGas += gas[i] - cost[i];
        curGas += gas[i] - cost[i];
        if (curGas < 0) {
            start = i + 1;
            curGas = 0;
        }
    }

    return netGas < 0 ? -1 : start;
};

'use strict';

function randomMaxIndex(nums) {
    let max = -Infinity;
    let res = -1;
    let count;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
            res = i;
            count = 1;
        } else if (nums[i] === max) {
            count++;
            if (Math.floor(Math.random() * count) === 0) {
                res = i;
            }
        }
    }
    return res;
}

const state = {};
for (let i = 0; i < 10000; i++) {
    const r = randomMaxIndex([3,1,1,3,3]);
    if (!state[r]) {
        state[r] = 0;
    }
    state[r]++;
}
console.log(state);

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
     if (nums.length < 2) {
          return 0;
     }

     const min = Math.min(...nums);
     const max = Math.max(...nums);

     const gap = Math.ceil((max - min) / (nums.length - 1));
     const bucketsMin = Array(nums.length-1).fill(Infinity);
     const bucketsMax = Array(nums.length-1).fill(-Infinity);

     for (let n of nums) {
          if (n === min || n === max) {
               continue;
          }
          const idx = Math.floor((n - min) / gap);
          bucketsMin[idx] = Math.min(n, bucketsMin[idx]);
          bucketsMax[idx] = Math.max(n, bucketsMax[idx]);
     }

     let maxGap = -Infinity;
     let previous = min;

     for (let i = 0; i < nums.length - 1; i += 1) {
          if (bucketsMin[i] === Infinity && bucketsMax[i] === -Infinity) {
               continue;
          }
          maxGap = Math.max(maxGap, bucketsMin[i] - previous);
          previous = bucketsMax[i];
     }

     maxGap = Math.max(maxGap, max - previous);

     return maxGap;
};

console.log(maximumGap([15252,16764,27963,7817,26155,20757,3478,22602,20404,6739,16790,10588,16521,6644,20880,15632,27078,25463,20124,15728,30042,16604,17223,4388,23646,32683,23688,12439,30630,3895,7926,22101,32406,21540,31799,3768,26679,21799,23740]));

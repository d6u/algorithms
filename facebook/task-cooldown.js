'use strict';

/**
 * @param {number[]} tasks
 * @return {string}
 */
function taskCooldown(tasks, cooldown) {
    let result = '';

    for (let i = 0; i < tasks.length; i += 1) {
        let l = 0;
        while (l < cooldown) {
            const j = result.length - 1 - l;
            if (j < 0) {
                l = cooldown;
                break;
            } else if (result[j] == tasks[i]) {
                break;
            }
            l += 1;
        }
        result += '_'.repeat(cooldown - l) + tasks[i];
    }

    return result;
}

console.log(taskCooldown([1, 1, 2, 1], 2));
console.log(taskCooldown([1, 2, 3, 1, 2, 3], 3));
console.log(taskCooldown([1, 2, 3 ,4, 5, 6, 2, 4, 6, 1, 2, 4], 6));

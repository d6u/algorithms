'use strict';

/**
 * @param {number[]} tasks
 * @return {string}
 */
function taskCooldown(tasks, cooldown) {
    let result = '';

    const queue = new Queue(cooldown);
    const map = new Map();
    let i = 0;

    for (const task of tasks) {
        let j;
        if (map.has(task)) {
            j = cooldown - (i - 1 - map.get(task));
        } else {
            j = 0;
        }

        result += '_'.repeat(j) + task;

        while (j > 0) {
            performTask('_', queue, map);
            i += 1;
            j -= 1;
        }

        performTask(task, queue, map);
        map.set(task, i);
        i += 1;
    }

    return result;
}

class Queue {
    constructor(size) {
        this.queue = Array(size);
    }

    push(val) {
        const task = this.queue.shift();
        this.queue.push(val);
        return task;
    }
}

function performTask(task, queue, map) {
    const t = queue.push(task);
    if (t !== '_') {
        map.delete(t);
    }
}

console.log(taskCooldown([1, 1, 2, 1], 2));
console.log(taskCooldown([1, 2, 3, 1, 2, 3], 3));
console.log(taskCooldown([1, 2, 3 ,4, 5, 6, 2, 4, 6, 1, 2, 4], 6));

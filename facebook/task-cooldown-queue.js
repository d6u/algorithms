'use strict';

/**
 * @param {number[]} tasks
 * @return {string}
 */
function taskCooldown(tasks, cooldown) {
    let result = '';
    const queue = new Queue(cooldown);

    for (const task of tasks) {
        let i = queue.find(task);
        if (i === -1) {
            i = cooldown;
        }
        result += '_'.repeat(cooldown - i) + task;
        while (cooldown - i > 0) {
            queue.push();
            i += 1;
        }
        queue.push(task);
    }

    return result;
}

class Queue {
    constructor(size) {
        this.queue = Array(size);
    }

    push(val = '_') {
        this.queue.shift();
        this.queue.push(val);
    }

    find(val) {
        for (let i = 0; i < this.queue.length; i += 1) {
            if (this.queue[this.queue.length - 1 - i] === val) {
                return i;
            }
        }
        return -1;
    }
}

console.log(taskCooldown([1, 1, 2, 1], 2));
console.log(taskCooldown([1, 2, 3, 1, 2, 3], 3));
console.log(taskCooldown([1, 2, 3 ,4, 5, 6, 2, 4, 6, 1, 2, 4], 6));

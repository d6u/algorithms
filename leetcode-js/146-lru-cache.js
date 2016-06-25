class DLinkedNode {
    constructor() {
        this.key = null;
        this.value = null;
        this.pre = null;
        this.post = null;
    }
}

class LRUCache {
    /**
     * @constructor
     */
    constructor(capacity) {
        this.cache = new Map();
        this.count = 0;
        this.capacity = capacity;
        this.head = new DLinkedNode();
        this.head.pre = null;
        this.tail = new DLinkedNode();
        this.tail.post = null;
        this.head.post = this.tail;
        this.tail.pre = this.head;
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        const node = this.cache.get(key);
        if (!node) {
            return -1;
        }
        this.moveToHead(node);
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @returns {void}
     */
    set(key, value) {
        const node = this.cache.get(key);
        if (!node) {
            const newNode = new DLinkedNode();
            newNode.key = key;
            newNode.value = value;
            this.cache.set(key, newNode);
            this.addNode(newNode);
            this.count += 1;
            if (this.count > this.capacity) {
                const tail = this.popTail();
                this.cache.delete(tail.key);
                this.count -= 1;
            }
        } else {
            node.value = value;
            this.moveToHead(node);
        }
    }

    addNode(node) {
        node.pre = this.head;
        node.post = this.head.post;
        this.head.post.pre = node;
        this.head.post = node;
    }

    removeNode(node) {
        const pre = node.pre;
        const post = node.post;
        pre.post = post;
        post.pre = pre;
    }

    moveToHead(node) {
        this.removeNode(node);
        this.addNode(node);
    }

    popTail() {
        const res = this.tail.pre;
        this.removeNode(res);
        return res;
    }
}

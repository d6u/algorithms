public class LRUCache {
    public LRUCache(int capacity) {
        this.capacity = capacity;
        head.next = tail;
        tail.prev = head;
    }

    private int capacity;
    private int size = 0;
    private Map<Integer, DLinkedNode> map = new HashMap<>();
    private DLinkedNode head = new DLinkedNode(0, 0);
    private DLinkedNode tail = new DLinkedNode(0, 0);

    public int get(int key) {
        if (map.containsKey(key)) {
            DLinkedNode node = map.get(key);
            moveToHead(node);
            return node.value;
        } else {
            return -1;
        }
    }

    public void set(int key, int value) {
        if (map.containsKey(key)) {
            DLinkedNode node = map.get(key);
            node.value = value;
            moveToHead(node);
        } else {
            if (size == capacity) {
                popTail();
                size--;
            }
            DLinkedNode node = new DLinkedNode(key, value);
            add(node);
            map.put(key, node);
            size++;
        }
    }

    private void moveToHead(DLinkedNode node) {
        remove(node);
        add(node);
    }

    private void popTail() {
        DLinkedNode node = map.get(tail.prev.key);
        map.remove(node.key);
        remove(node);
    }

    private void remove(DLinkedNode node) {
        DLinkedNode prev = node.prev;
        prev.next = node.next;
        node.next.prev = prev;
    }

    private void add(DLinkedNode node) {
        node.next = head.next;
        node.next.prev = node;
        head.next = node;
        node.prev = head;
    }

    private class DLinkedNode {
        DLinkedNode(int key, int value) {
            this.key = key;
            this.value = value;
        }

        int key;
        int value;
        DLinkedNode prev = null;
        DLinkedNode next = null;
    }
}

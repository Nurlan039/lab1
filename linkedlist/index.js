// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    insertFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    size() {
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) return null;

        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    insertLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }

    get(index) {
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            if (!currentNode) return null;
            currentNode = currentNode.next;
        }
        return currentNode ? currentNode.data : null;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (this.head) {
            this.head = this.head.next;
        }
    }

    removeLast() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let currentNode = this.head;
        while (currentNode.next.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
    }

    getAt(index) {
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            if (!currentNode) return null;
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    removeAt(index) {
        if (!this.head) return;

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const prevNode = this.getAt(index - 1);
        if (!prevNode || !prevNode.next) return;

        prevNode.next = prevNode.next.next;
    }

    insertAt(data, index) {
        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        const prevNode = this.getAt(index - 1);
        if (!prevNode) {
            this.insertLast(data);
            return;
        }

        const newNode = new Node(data);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
    }

    forEach(fn) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            fn(currentNode, index);
            currentNode = currentNode.next;
            index++;
        }
    }

    *[Symbol.iterator]() {
        let currentNode = this.head;
        while (currentNode) {
            yield currentNode;
            currentNode = currentNode.next;
        }
    }
}

module.exports = { Node, LinkedList };

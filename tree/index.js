// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree


class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(childData) {
        const childNode = new Node(childData);
        this.children.push(childNode);
    }

    remove(childData) {
        this.children = this.children.filter(child => child.data !== childData);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            if (node) {
                fn(node);
                queue.push(...node.children);
            }
        }
    }

    traverseDF(fn) {
        const stack = [this.root];
        while (stack.length) {
            const node = stack.pop();
            if (node) {
                fn(node);
                // Push children to stack in reverse order to maintain the correct order during traversal
                for (let i = node.children.length - 1; i >= 0; i--) {
                    stack.push(node.children[i]);
                }
            }
        }
    }
}


module.exports = { Tree, Node };

// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const widths = [];

    function traverse(node, level) {
        if (widths[level] === undefined) {
            widths[level] = 0;
        }

        widths[level]++;

        for (const child of node.children) {
            traverse(child, level + 1);
        }
    }

    traverse(root, 0);

    return widths;
}

module.exports = levelWidth;

// function maxDepth(root) {
//     let leftDepth = 0;
//     let rightDepth = 0;
//     if (root.left) {
//         leftDepth = maxDepth(root.left);
//     }

//     if (root.right) {
//         rightDepth = maxDepth(root.right);
//     }

//     return Math.max(leftDepth, rightDepth) + 1;
// }

function maxDepth(root) {
    let depth = 0;
    let queue = [root];
    let node;
    while (queue.length) {
        depth++;
        let length = queue.length;
        while (length--) {
            node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    return depth;
}

const root = {
    val: 3,
    left: { val: 9 },
    right: {
        val: 20,
        left: {
            val: 15,
            left: {
                val: 1,
                left: null,
                right: null
            },
            right: {
                val: 6,
                left: {
                    val: 2,
                    left: null,
                    right: null
                },
                right: null,
            }
        },
        right: { val: 7, left: null, right: null },
    },
};

console.log(maxDepth(root));


function traverse(root) {
    let output = [root]
    let stack = [root]
    let node = root
    while (stack.length) {
        while (node.right) {
            node = node.right
            stack.push(node)
            output.push(node)
        }
        node = stack.pop()
        if (node.left) {
            node = node.left
            stack.push(node)
            output.push(node)
        }
    }
    output = output.reverse()
    for (let v of output) {
        console.log(v.value)
    }
}

const root = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
            left: null,
            right: null
        },
        right: {
            value: 5,
            left: null,
            right: null
        }
    },
    right: {
        value: 3,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 7,
            left: null,
            right: null
        }
    }
};

traverse(root)
// 方法一
function traverse(root) {
    let node = root; // node为当前遍历的节点， 初始为根
    let stack = []; // stack作为栈
    while (node || stack.length) {
        if (node) {
            // 遍历左子树
            stack.push(node);
            // 每遇到非空二叉树先向做走
            node = node.left;
        } else {
            // node为空，出栈
            let node = stack.pop();
            // 访问该节点
            console.log(node.value);
            // 向右走一次
            node = node.right;
        }
    }
}

// 方法二
function traverse2(root) {
    let result = []
    let node = root
    let stack = [root]
    while (stack.length) {
        while (node.left) {
            node = node.left
            stack.push(node)
        }
        node = stack.pop()
        result.push(node.value)
        if (node.right) {
            node = node.right
            stack.push(node)
        }
    }
    console.log(result)
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

traverse2(root);
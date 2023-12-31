function traverse(root) {
    let outputStack = []; // 最终用来倒序输出的栈
    let stack = [root]; // 用来先序遍历的栈
    while (stack.length) {
        let n = stack.pop();
        // 将 n push 到 outputStack 中
        outputStack.push(n);
        // 因为和先序遍历不完全一样，先序遍历：根-左-右，此时为：根-右-左
        // 所以此时先 push left，再 push right
        if (n.left) stack.push(n.left);
        if (n.right) stack.push(n.right);
    }
    // 最终遍历 pop outputStack 的所有元素输出，即为后序遍历的结果
    while (outputStack.length) {
        let n = outputStack.pop();
        console.log(n.value);
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

traverse(root);
/*
 * 原地址：https://www.jianshu.com/p/5e9ea25a1aae
 */

// 二叉树的深度遍历(递归算法)
// let result = [];
// let dfs = function (node) {
//     if (node) {
//         result.push(node.value);
//         dfs(node.left);
//         dfs(node.right);
//     }
// }

// 二叉树的深度遍历(非递归算法)
let dfs = function (root) {
    let result = [];
    let stack = [root];
    while (stack.length) {
        let node = stack.pop(); // 取的是栈中最后一个j
        result.push(node.value);
        if (node.right) stack.push(node.right); // 先压入右子树
        if (node.left) stack.push(node.left); // 后压入左子树
    }
    return result;
};

const root = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
            left: null,
            right: null,
        },
        right: {
            value: 5,
            left: null,
            right: null,
        },
    },
    right: {
        value: 3,
        left: {
            value: 6,
            left: null,
            right: null,
        },
        right: {
            value: 7,
            left: null,
            right: null,
        },
    },
};

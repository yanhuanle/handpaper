/*
 * 原地址：https://www.jianshu.com/p/5e9ea25a1aae
 */

// 二叉树的广度遍历(递归算法)
let result = [];
let stack = [root]; // 先将要遍历的树压入栈
let bfs = function () {
    let node = stack.shift();
    if (node) {
        result.push(node.value);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
        bfs();
    }
};

// 二叉树的广度遍历(非递归算法)
function bfs(node) {
    let result = [];
    let queue = [node];
    while (queue.length) {
        node = queue.shift();
        result.push(node.value); // 不要忘记访问
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return result;
}
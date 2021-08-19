/**
   给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

   示例：
   二叉树：[3,9,20,null,null,15,7],

       3
      / \
     9  20
       /  \
      15   7
   返回其层序遍历结果：

   [
     [3],
     [9,20],
     [15,7]
   ]

   来源：力扣（LeetCode）
   链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelNumber = function (root) {
    let queue = [root]
    let result = [root.val]

    while (queue.length) {
        let len = queue.length
        while (len--) {
            root = queue.shift()
            if (root.left) {
                queue.push(root.left)
            }
            if (root.right) {
                queue.push(root.right)
            }
        }
        if (queue.length) {
            result.push(queue.map(q => q.val))
        }
    }

    return result
}

const root = {
    value: 3,
    left: {
        value: 9,
    },
    right: {
        value: 20,
        left: {
            value: 15,
            // left: {
            //     value: 1,
            //     left: null,
            //     right: null
            // },
            // right: {
            //     value: 8,
            //     left: {
            //         value: 2,
            //         left: null,
            //         right: null
            //     },
            //     right: {
            //         value: 6
            //     }
            // }
        },
        right: { value: 7 },
    },
};

console.log(levelNumber(root))
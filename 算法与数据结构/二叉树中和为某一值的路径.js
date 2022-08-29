/**
 *
 * @param {*} root
 * @param {*} sum
 * @returns
 */

function hasPathSum(root, sum) {
    //空节点找不到路径
    if (root == null) {
        return false;
    }
    //叶子节点，且路径和为sum
    if (root.left == null
        && root.right == null
        && sum - root.value == 0
    ) {
        return true;
    }
    //递归进入子节点
    return hasPathSum(root.left, sum - root.value)
        || hasPathSum(root.right, sum - root.value);
}

const root = {
    value: 5,
    left: {
        value: 4,
        left: {
            value: 1,
            left: null,
            right: null
        },
        right: {
            value: 11,
            left: {
                value: 2,
                left: null,
                right: null
            },
            right: {
                value: 7,
                left: null,
                right: null
            }
        }
    },
    right: {
        value: 8,
        left: null,
        right: {
            value: 10,
            left: null,
            right: null
        }
    }
};

console.log(hasPathSum(root, 22))
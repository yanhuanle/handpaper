/**
 * 给定一个二叉树和一个值 sum，
 * 请找出所有的根节点到叶子节点的节点值之和等于 sum 的路径
 *
 * https://www.nowcoder.com/practice/840dd2dc4fbd4b2199cd48f2dadf930a?tpId=117&&tqId=34929&&companyId=138&rp=1&ru=/company/home/code/138&qru=/ta/job-code-high/question-ranking
 */

let path = []
let tmpPath = []

function pathSum(root, sum) {
    dfs(root, sum, 0)
    return path
}

function dfs(root, sum, current) {
    if (root == null) { return }
    tmpPath.push(root.value)
    current += root.value

    if (!root.left && !root.right) {
        if (current == sum) {
            path.push(tmpPath.slice())
        }
    }
    else {
        dfs(root.left, sum, current)
        dfs(root.right, sum, current)
    }

    current -= tmpPath[tmpPath.length - 1]
    tmpPath.pop()
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
            value: 9,
            left: null,
            right: null
        }
    }
};

console.log(pathSum(root, 22))
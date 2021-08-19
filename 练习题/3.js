/**
 *
 * 完全平方数
 * @param {*} n
 * @returns
 *
 * https://leetcode-cn.com/problems/perfect-squares/solution/
 * * wan-quan-ping-fang-shu-by-leetcode-solut-t99c/
 */

function fullSquare(n) {
    let fn = new Array(n + 1).fill(0)
    for (let i = 1; i <= n; i++) {
        let min = Number.MAX_VALUE
        for (let j = 1; j * j <= i; j++) {
            min = Math.min(min, fn(i - j * j))
        }
        fn[i] = min + 1
    }
    return fn[n]
}
/**
 *
 * 279. 完全平方数
 *
 * 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量。
 *
 * 完全平方数 是一个整数，其值等于另一个整数的平方；
 * 换句话说，其值等于一个整数自乘的积。
 * 例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
 *
 * https://leetcode.cn/problems/perfect-squares/
 */

function fullSquare(n) {
    let fn = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        let min = Number.MAX_VALUE;
        for (let j = 1; j * j <= i; j++) {
            min = Math.min(min, fn[i - j * j]);
        }
        fn[i] = min + 1;
    }
    return fn[n];
}

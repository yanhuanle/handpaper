/**
 * 29. 两数相除
 *
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 * 整数除法的结果应当截去（truncate）其小数部分，
 * 例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2
 *
 * https://leetcode.cn/problems/divide-two-integers/description/
 */

function divide(dividend, divisor) {
    const MAX_VALUE = 2 ** 31 - 1,
        MIN_VALUE = -(2 ** 31);
    if (dividend == 0) {
        return 0;
    }
    if (dividend == MIN_VALUE) {
        if (divisor == 1) {
            return MIN_VALUE;
        }
        if (divisor == -1) {
            return MAX_VALUE;
        }
    }
    let flag = false;
    if (dividend > 0) {
        dividend = -dividend;
        flag = !flag;
    }
    if (divisor > 0) {
        divisor = -divisor;
        flag = !flag;
    }
    let ans = 0;
    while (dividend <= divisor) {
        let x = 1;
        let d = divisor;
        while (dividend < d + d) {
            x += x;
            d += d;
        }
        ans += x;
        dividend -= d;
    }
    return flag ? -ans : ans;
}

console.log('运行结果:', divide(10, 3));

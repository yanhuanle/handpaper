/**
 * https://www.nowcoder.com/practice/b4525d1d84934cf280439aeecc36f4af?tpId=295&tqId=25269&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj
 *
 * 描述
 * 对于长度为n的一个字符串A（仅包含数字，大小写英文字母），
 * 请设计一个高效算法，计算其中最长回文子串的长度。

 * 数据范围： 1 \le n \le 10001≤n≤1000
 * 要求：空间复杂度 O(1)O(1)，时间复杂度 O(n^2)O(n2)
 * 进阶:  空间复杂度 O(n)O(n)，时间复杂度 O(n)O(n)
 */

 function getLongestPalindrome(A) {
    // 动态规划：i到j的子串是否是回文子串
    let n = str.length
    const dp = new Array(n).fill(false).map(() => {
        return new Array(n).fill(false)
    });
    let max = 0;
    // 字符串长度差 c = j-i，即当前要比较的字符串长度，这里可以 c <= n / 2 + 1，减少判断次数
    for (let c = 0; c <= n / 2 + 1; c++) {
        // 起始下标，范围取决于要判断的字符串长度c
        // i 和 j 分别为要比较的字符串的左右边界指针
        for (let i = 0; i < n - c; i++) {
            // 终点下标
            let j = c + i;
            // 左右边界的字符相等
            if (A[i] == A[j]) {
                // c <= 1表示只有两个字符的字符串，一个或两个字符肯定是回文串
                if (c <= 1) {
                    dp[i][j] = true;
                } else {
                    // 对于两个字符以上的字符串
                    // 因为最左右的字符已经相等，因此取决于内层的子串是否是回文子串
                    dp[i][j] = dp[i + 1][j - 1];
                }
                // 更新回文串的最大长度，c代表判断的子串长度，越来越大
                if (dp[i][j]) {
                    max = c + 1;
                }
            }
        }
    }
    return max;
}

str = "ababc"
console.log(getLongestPalindrome(str))
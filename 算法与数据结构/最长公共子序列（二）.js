/**
 * https://www.nowcoder.com/practice/6d29638c85bb4ffd80c020fe244baf11?tpId=295&tqId=991075&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj
 *
 * 初始化首行首列为“”，然后比较字符，如果相等，当前位置赋值为[i-1][j-1]+当前字符，否则就从[i-1][j]或[i][j-1]取最长的。最后结果就在右下角。
 */

function LCS(s1, s2) {
    let m = s1.length;
    let n = s2.length;

    const dp = new Array(m + 1).fill('').map(() => {
        return new Array(n + 1).fill('')
    });

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            let c1 = s1[i - 1];
            let c2 = s2[j - 1];
            if (c1 == c2) {
                dp[i][j] = dp[i - 1][j - 1] + c1;
            }
            else {
                let l1 = dp[i - 1][j].length;
                let l2 = dp[i][j - 1].length;
                dp[i][j] = l1 >= l2 ? dp[i - 1][j] : dp[i][j - 1];
            }
        }
    }

    return dp[m][n];
}

str1 = "1A2C3D4B56"
str2 = "B1D23A456A"
console.log(LCS(str1, str2))
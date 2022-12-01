/**
 * 139. 单词拆分
 *
 * 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。
 * 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
 *
 * https://leetcode.cn/problems/word-break/description/
 */

function wordBreak(str, wordDict) {
    wordDict = new Set(wordDict)
    let n = str.length
    let dp = new Array(n + 1).fill(false)
    dp[0] = true
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.has(str.substr(j, i - j))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
}

// console.log('运行结果:', wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
console.log('运行结果:', wordBreak("applepenapple", ["apple", "pen"]));
/*
            哦，不！你不小心把一个长篇文章中的空格、标点都删掉了，并且大写也弄成了小写。像句子"I reset the computer. It still didn’t boot!"已经变成了"iresetthecomputeritstilldidntboot"。在处理标点符号和大小写之前，你得先把它断成词语。当然了，你有一本厚厚的词典dictionary，不过，有些词没在词典里。假设文章用sentence表示，设计一个算法，把文章断开，要求未识别的字符最少，返回未识别的字符数。

            示例：

            输入1：
            dictionary = ["looked","just","like","her","brother"]
            sentence = "jesslookedjustliketimherbrother"
            输出： 7
            解释： 断句后为"jess looked just like tim her brother"，共7个未识别字符。

            输入2：
            dictionary = ["potimzz"]
            sentence = "potimzzpotimzz"
            输出2： 0
        */

var respace = function (dictionary, sentence) {
    var n = sentence.length;
    var root = new Trie();
    for (let word of dictionary) {
        root.insert(word);
    }

    let dp = new Array(n + 1).fill(Number.MAX_VALUE);
    dp[0] = 0;
    for (var i = 1; i <= n; ++i) {
        dp[i] = dp[i - 1] + 1;
        var curPos = root;
        for (var j = i; j >= 1; --j) {
            let t = sentence[j - 1];

            if (curPos[t] == null) {
                break;
            } else if (curPos[t].isEnd) {
                dp[i] = Math.min(dp[i], dp[j - 1]);
            }

            if (dp[i] === 0) {
                break;
            }

            curPos = curPos[t];
        }
    }
    return dp[n];
};

class Trie {
    insert(s) {
        var curPos = this;
        for (var i = s.length - 1; i >= 0; --i) {
            let t = s[i];
            if (!curPos[t]) {
                curPos[t] = {};
            }
            curPos = curPos[t];
        }
        curPos.isEnd = true;
    }
}

dictionary = ['looked', 'just', 'like', 'her', 'brother'];
sentence = 'jesslookedjustliketimherbrother';

// dictionary = ["potimzz"]
// sentence = "potimzzpotimzz"

let result = respace(dictionary, sentence);
console.log(result);

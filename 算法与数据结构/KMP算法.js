/*
            有一个文本串S，和一个模式串P，查找P在S中的位置。
            https://www.cnblogs.com/zzuuoo666/p/9028287.html
        */

let next = [];

var kmpSearch = function (s, p) {
    let sLen = s.length,
        pLen = p.length;
    let i = 0,
        j = 0;
    while (i < sLen && j < pLen) {
        if (j == -1 || s[i] == p[j]) {
            i++;
            j++;
        } else {
            j = next[j];
        }
    }

    if (j == pLen) {
        return i - j;
    } else {
        return -1;
    }
};

var getNext = function (p) {
    let pLen = p.length;
    next = [-1];
    let k = -1;
    let j = 0;
    while (j < pLen - 1) {
        //p[k]表示前缀，p[j]表示后缀
        if (k == -1 || p[j] == p[k]) {
            ++k;
            ++j;
            next[j] = k;
        } else {
            k = next[k];
        }
    }
};

s = 'bbc abcdab abcdabcdabde';
p = 'abcdabd';

getNext(p);
console.log(kmpSearch(s, p));

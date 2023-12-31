// 如果序列 X_1, X_2, ..., X_n 满足下列条件，就说它是 斐波那契式 的：

// n >= 3
// 对于所有 i + 2 <= n，都有 X_i + X_{i+1} = X_{i+2}
// 给定一个严格递增的正整数数组形成序列，找到 A 中最长的斐波那契式的子序列的长度。如果一个不存在，返回  0 。

// （回想一下，子序列是从原序列 A 中派生出来的，它从 A 中删掉任意数量的元素（也可以不删），而不改变其余元素的顺序。例如， [3, 5, 8] 是 [3, 4, 5, 6, 7, 8] 的一个子序列）
function lenLongestFibSubseq(A) {
    let N = A.length;
    let index = new Map();
    for (let i = 0; i < N; ++i) index.set(A[i], i);

    let longest = new Map();
    let ans = 0;

    for (let k = 0; k < N; ++k)
        for (let j = 0; j < k; ++j) {
            let i = index.get(A[k] - A[j]);
            i = typeof i === 'undefined' ? -1 : i;
            if (i >= 0 && i < j) {
                // Encoding tuple (i, j) as integer (i * N + j)
                let cand = longest.get(i * N + j);
                cand = typeof cand === 'undefined' ? 2 + 1 : cand + 1;
                longest.set(j * N + k, cand);
                ans = Math.max(ans, cand);
            }
        }

    return ans >= 3 ? ans : 0;
}

nums = [1, 3, 7, 11, 12, 14, 18];
// nums = [1,2,3,4,5,6,7,8]
console.log(lenLongestFibSubseq(nums));

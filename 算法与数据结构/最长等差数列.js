function longestArithSeqLength(A) {
    let N = A.length;
    let index = new Map();
    for (let i in A) {
        index.set(A[i], i);
    }

    let ans = 0;
    let longest = new Map();
    for (let k = 0; k < N; k++) {
        for (let j = 0; j < k; j++) {
            let i = index.get(2 * A[j] - A[k]);
            i = typeof i === 'undefined' ? -1 : i;
            if (i >= 0 && i < j) {
                let cand = longest.get(i * N + j);
                cand = typeof cand === 'undefined' ? 2 + 1 : cand + 1;
                longest.set(j * N + k, cand);
                ans = Math.max(ans, cand);
            }
        }
    }

    return ans;
}

nums = [3, 6, 9, 12];
nums = [9, 4, 7, 2, 10];
nums = [1, 2, 5, 11, 15, 21, 22, 31, 41, 50, 61, 71];
console.log(longestArithSeqLength(nums));

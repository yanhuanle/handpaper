function maxSubarraySumCircular(A) {
    let N = A.length;

    // Compute P[j] = B[0] + B[1] + ... + B[j-1]
    // for fixed array B = A+A
    let P = [A[0]];
    for (let i = 1; i < 2 * N; ++i) {
        P[i] = P[i - 1] + A[i % N];
    }

    // Want largest P[j] - P[i] with 1 <= j-i <= N
    // For each j, want smallest P[i] with i >= j-N
    let ans = A[0];
    // deque: i's, increasing by P[i]
    let deque = [0];

    for (let j = 1; j < 2 * N; ++j) {
        // If the smallest i is too small, remove it.
        if (j - deque[0] > N) {
            deque.shift();
        }

        // The optimal i is deque[0], for cand. answer P[j] - P[i].
        ans = Math.max(ans, P[j] - P[deque[0]]);

        // Remove any i1's with P[i2] <= P[i1].
        while (deque.length && P[deque[deque.length - 1]] >= P[j]) {
            deque.pop();
        }

        deque.push(j);
    }

    return ans;
}

A = [1, -2, 3, -2];
A = [5, -3, 5];
// A = [3,-1,2,-1]
// A = [-2,-3,-1]
console.log(maxSubarraySumCircular(A));

function backpack(n, w, v, capacity) {
    let dp = []

    for (let i = 0; i <= n; i++) {
        dp[i] = []
        for (let j = 0; j <= capacity; j++) {
            if (i == 0 || j == 0) {
                dp[i][j] = 0
            }
            else if (j < w[i - 1]) {
                dp[i][j] = dp[i - 1][j]
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w[i - 1]] + v[i - 1])
            }
        }
    }

    return dp
}

capacity = 12
w = [4, 6, 2, 2, 5, 1]
v = [8, 10, 6, 3, 7, 2]
n = v.length
console.log(backpack(n, w, v, capacity))
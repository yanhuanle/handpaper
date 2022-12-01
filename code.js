/**
 * 练习题
 */

// function coinChange(coins, amount) {
//     let dp = [0];
//     for (let i = 1; i <= amount; i++) {
//         let min = Number.MAX_VALUE;
//         for (let j = 0; j < coins.length; j++) {
//             let index = i - coins[j];
//             if (index >= 0) {
//                 min = Math.min(min, dp[index]);
//             }
//         }
//         dp[i] = min + 1;
//     }
//     return dp[amount];
// }

function coinChange(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}

let coins = [186, 419, 83, 408],
    amount = 6249;
coins = [1, 2, 5];
amount = 20;
console.log('运行结果:', coinChange(coins, amount));

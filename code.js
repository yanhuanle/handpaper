/**
 * 练习题
 */

// var maxProfit = function (prices) {
//     let n = prices.length
//     let f = new Array(n).fill([]).map(() => {
//         return new Array(3)
//     })
//     f[0][0] = -prices[0]
//     f[0][1] = 0
//     f[0][2] = 0
//     for (let i = 1; i < n; i++) {
//         f[i][0] = Math.max(f[i - 1][0], f[i - 1][2] - prices[i])
//         f[i][1] = f[i - 1][0] + prices[i]
//         f[i][2] = Math.max(f[i - 1][1], f[i - 1][2])
//     }
//     return Math.max(f[n - 1][1], f[n - 1][2])
// };

// var maxProfit = function (prices) {
//     let n = prices.length
//     let f = new Array(n).fill([]).map(() => {
//         return new Array(2)
//     })
//     f[0][0] = -prices[0]
//     f[0][1] = 0
//     for (let i = 1; i < n; i++) {
//         f[i][0] = Math.max(f[i - 1][0], f[i - 1][1] - prices[i])
//         f[i][1] = Math.max(f[i - 1][0] + prices[i], f[i - 1][1])
//     }
//     return f[n - 1][1]
// };

// var maxProfit = function (prices, fee) {
//     let n = prices.length
//     let f = new Array(n).fill([]).map(() => {
//         return new Array(2)
//     })
//     f[0][0] = -prices[0]
//     f[0][1] = 0
//     for (let i = 1; i < n; i++) {
//         f[i][0] = Math.max(f[i - 1][0], f[i - 1][1] - prices[i])
//         f[i][1] = Math.max(f[i - 1][0] + prices[i] - fee, f[i - 1][1])
//     }
//     return f[n - 1][1]
// };

var maxProfit = function (prices, fee) {
    let n = prices.length
    let f = new Array(n).fill([]).map(() => {
        return new Array(2)
    })
    let buy = -prices[0]
    let sell = 0
    for (let i = 1; i < n; i++) {
        [buy, sell] = [Math.max(buy, sell - prices[i]), Math.max(buy + prices[i] - fee, sell)]
    }
    return sell
};

// prices = [7, 1, 5, 3, 6, 4]
// prices = [1, 2, 3, 4, 5]
// prices = [7,6,4,3,1]
prices = [1, 3, 2, 8, 4, 9], fee = 2
prices = [1,3,7,5,10,3], fee = 3
console.log('运行结果:', maxProfit(prices, fee));
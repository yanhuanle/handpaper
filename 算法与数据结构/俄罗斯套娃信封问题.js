var maxEnvelopes = function (envelopes) {
    envelopes = bubbleSort(envelopes);
    let secondDim = envelopes.map(e => e[1]);

    let dp = [1],
        maxNumber = 0;
    for (let i = 1; i < secondDim.length; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (secondDim[j] < secondDim[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxNumber = Math.max(maxNumber, dp[i]);
    }

    return maxNumber;
};

var bubbleSort = function (arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j][0] > arr[i][0] || arr[j][1] < arr[i][1]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
};

// envelopes = [[5,4],[6,4],[6,7],[2,3]]
// envelopes = [[5,4],[6,4],[5,6],[12,9],[7,9]]
envelopes = [
    [1, 4],
    [1, 5],
    [2, 3],
    [1, 2],
];
console.log(maxEnvelopes(envelopes));

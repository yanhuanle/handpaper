/**
 * 300. 最长递增子序列
 *
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
 * 例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 *
 * https://leetcode.cn/problems/longest-increasing-subsequence/description/
 */

// 方法一: 动态规划
function lengthOfLIS(nums) {
    let dp = [1];
    let maxlen = 1;
    for (let i = 1; i < nums.length; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxlen = Math.max(maxlen, dp[i]);
    }
    return maxlen;
}

// 方法二: 贪心+二分查找
function lengthOfLIS2(nums) {
    let len = 1;
    let dp = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > dp[dp.length - 1]) {
            dp.push(nums[i]);
            len++;
        } else {
            let index = binarySearch(dp, 0, dp.length - 1, nums[i]);
            dp.splice(index, 1, nums[i]);
        }
    }

    function binarySearch(arr, left, right, value) {
        if (left >= right) {
            return left;
        }

        let m = Math.floor((right + left) / 2);
        if (arr[m] == value) {
            return m;
        } else if (arr[m] > value) {
            return binarySearch(arr, left, m, value);
        } else {
            return binarySearch(arr, m + 1, right, value);
        }
    }

    return len;
}

// function lengthOfLIS(nums) {
//     let len = 1, n = nums.length;
//     let d = [];
//     d[len] = nums[0];
//     for (let i = 1; i < n; ++i) {
//         if (nums[i] > d[len]) {
//             d[++len] = nums[i];
//         } else {
//             let l = 1, r = len, pos = 0;
//             while (l <= r) {
//                 let mid = Math.floor((l + r) / 2);
//                 if (d[mid] < nums[i]) {
//                     pos = mid;
//                     l = mid + 1;
//                 } else {
//                     r = mid - 1;
//                 }
//             }
//             d[pos + 1] = nums[i];
//         }
//     }
//     return len;
// }

// let nums = [0,1,0,3,2,3]
nums = [10, 9, 21, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));

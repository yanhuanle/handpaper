// 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

// 示例 1:
// 输入: [2,3,-2,4]
// 输出: 6
// 解释: 子数组 [2,3] 有最大乘积 6。

// 示例 2:
// 输入: [-2,0,-1]
// 输出: 0
// 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
var maxProduct = function (nums) {
    let preMax = 1,
        preMin = 1,
        currentMax = 1;
    for (let i = 0; i < nums.length; i++) {
        let max = preMax,
            min = preMin;
        preMax = Math.max(max * nums[i], min * nums[i], nums[i]);
        preMin = Math.min(max * nums[i], min * nums[i], nums[i]);
        currentMax = Math.max(currentMax, preMax);
    }
    return currentMax;
};

nums = [2, 3, -2, 4];
nums = [-2, 0, -1, -4, 1, 2];
// nums = [3,-1,2,-4,1]
console.log(maxProduct(nums));

// 给定一个整数数组 nums ，你可以对它进行一些操作。
// 每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除每个等于 nums[i] - 1 或 nums[i] + 1 的元素。
// 开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。
function deleteAndEarn(nums) {
    let count = [];
    for (let x of nums) {
        count[x] ||= 0;
        count[x]++;
    }
    let avoid = 0,
        using = 0,
        prev = -1;

    for (let k = 0; k <= 10000; ++k) {
        if (count[k] > 0) {
            let m = Math.max(avoid, using);
            if (k - 1 != prev) {
                using = k * count[k] + m;
                avoid = m;
            } else {
                using = k * count[k] + avoid;
                avoid = m;
            }
            prev = k;
        }
    }
    return Math.max(avoid, using);
}

nums = [2, 2, 3, 3, 3, 4];
nums = [3, 4, 2];
console.log(deleteAndEarn(nums));

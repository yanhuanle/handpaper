/**
 * @param {number[]} nums 传入数组
 * @param {number} k 滑动窗口宽度
 * @return {number[]}
 *
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内
 * 的 k 个数字。滑动窗口每次只向右移动一位。
 * 返回滑动窗口中的最大值。
 *
 * 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
 * 输出：[3,3,5,5,6,7]
 * 解释：
 * 滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * 1 [3  -1  -3] 5  3  6  7       3
 * 1  3 [-1  -3  5] 3  6  7       5
 * 1  3  -1 [-3  5  3] 6  7       5
 * 1  3  -1  -3 [5  3  6] 7       6
 * 1  3  -1  -3  5 [3  6  7]      7
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/sliding-window-maximum
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 时间复杂度: n * k
var maxSlidingWindow = function(nums, k) {
    let n = nums.length
    let queue = []
    for (let i = 0; i < k; i++) {
        while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
            queue.pop()
        }
        queue.push(i)
    }

    let ans = [nums[queue[0]]]
    for (let i = k; i < n; i++) {
        while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
            queue.pop()
        }
        queue.push(i)
        while (queue[0] <= i - k) {
            queue.shift()
        }
        ans.push(nums[queue[0]])
    }

    return ans
}

var maxSlidingWindow2 = function (nums, k) {
    if (k <= 1) {
        return nums
    }
    let deque = [], result = []
    let length = nums.length
    for (let i = 0; i <= length - k; i++) {
        if (i === 0) {
            deque.push(nums[i])
        }
        let j = i
        while (j <= i + k - 1) {
            while (deque.length && nums[j] >= deque[deque.length - 1]) {
                deque.pop()
            }
            deque.push(nums[j])
            j++
        }
        if (nums[j - k - 1] === deque[0]) {
            deque.shift()
        }
        result.push(deque[0])
    }
    return result
}

let arr = [1, 3, -1, -3, 5, 3, 6, 7]
console.log(maxSlidingWindow(arr, 3))
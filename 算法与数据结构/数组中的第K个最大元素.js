/**
 * 数组中的第K个最大元素
 *
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 *
 * 示例 1:
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 *
 * 示例 2:
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出: 4
 *
 * https://leetcode.cn/problems/kth-largest-element-in-an-array/solution/dai-ma-jian-ji-yi-chong-huan-bu-cuo-de-j-11ih/
 */

 const findKthLargest = (nums, k) => {
    const n = nums.length;

    const quick = (l, r) => {
        if (l > r) return;//递归终止条件
        let random = Math.floor(Math.random() * (r - l + 1)) + l; //随机选取一个索引
        swap(nums, random, r); //将它和位置r的元素交换，让nums[r]作为基准元素

        //对基准元素进行partition
        let pivotIndex = partition(nums, l, r);
        //进行partition之后，基准元素左边的元素都小于它 右边的元素都大于它
        //如果partition之后，这个基准元素的位置pivotIndex正好是n-k 则找大了第k大的数
        //如果n-k<pivotIndex,则在pivotIndex的左边递归查找
        //如果n-k>pivotIndex，则在pivotIndex的右边递归查找
        if (n - k < pivotIndex) {
            quick(l, pivotIndex - 1);
        } else {
            quick(pivotIndex + 1, r);
        }
    };

    quick(0, n - 1);//函数开始传入的left=0，right= n - 1
    return nums[n - k]; //最后找到了正确的位置 也就是n-k等于pivotIndex 这个位置的元素就是第k大的数
};

function partition(nums, left, right) {
    let pivot = nums[right];             	//最右边的元素为基准
    let pivotIndex = left;               	//pivotIndex初始化为left
    for (let i = left; i < right; i++) { 	//遍历left到right-1的元素
        if (nums[i] < pivot) {             	//如果当前元素比基准元素小
            swap(nums, i, pivotIndex);       	//把它交换到pivotIndex的位置
            pivotIndex++;                    	//pivotIndex往前移动一步
        }
    }
    swap(nums, right, pivotIndex);       	//最后交换pivotIndex和right
    return pivotIndex;                   	//返回pivotIndex
}

function swap(nums, p, q) {
    const temp = nums[p];
    nums[p] = nums[q];
    nums[q] = temp;
}

let nums = [3, 2, 1, 5, 6, 4]
let k = 2

nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]
k = 4
console.log(findKthLargest(nums, k))
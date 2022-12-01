/*
 * 传统快速排序需要不断创建新的数组，会增加空间复杂度。
 * 该方法是原地排序的，只需要递归的内存空间，空间复杂度为 log{n}
 */

function quickSort(arr, left, right) {
    let len = arr.length;
    left = left !== undefined ? left : 0;
    right = right !== undefined ? right : len - 1;
    // 递归，终止条件是left >= right
    if (left < right) {
        let index = sortAndFindIndex(arr, left, right);
        quickSort(arr, left, index - 1);
        quickSort(arr, index + 1, right);
    }
    return arr;
}

// 小于基准点的放在前面，大于基准点的放在后面，并获取基准点的索引
function sortAndFindIndex(arr, left, right) {
    // 获取当前基准点索引对应的值
    const baseValue = arr[left];
    let index = left + 1;
    for (let i = index; i <= right; i++) {
        if (baseValue > arr[i]) {
            swap(arr, index, i);
            index++;
        }
    }
    // 减1是因为最后依次符合条件的i加1了
    swap(arr, index - 1, left);
    return index - 1;
}

function swap(arr, i, j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

let arr = [0, 1, 3, 4, 5, 7, 8, 9, 10];
console.log(quickSort(arr, 0, 9));

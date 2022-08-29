function getLeastNumbers(arr, k) {
    let n = arr.length
    return quickSort(arr, 0, n - 1, k - 1)
}

function quickSort(arr, low, high, k) {
    let j = partition(arr, low, high)
    if (j == k) {
        return arr.slice(0, j + 1)
    }
    else if (j > k) {
        return quickSort(arr, low, j - 1, k)
    }
    else {
        return quickSort(arr, j + 1, high, k)
    }
}

function partition(arr, low, high) {
    let base = arr[low]
    let i = low + 1
    let j = high
    while (true) {
        while (i <= high && arr[i] < base) {
            i++;
        }
        while (j >= low && arr[j] > base) {
            j--;
        }
        if (i >= j) {
            break
        }
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    arr[low] = arr[j]
    arr[j] = base

    return j
}

let arr = [4,5,1,6,2,7,3,8]
console.log(getLeastNumbers(arr, 4))
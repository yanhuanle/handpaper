function rob(nums) {
    let first = 0;
    let second = 0;
    for (let i of nums) {
        let temp = second;
        second = Math.max(second, first + i);
        first = temp;
    }
    return second;
}

let arr = [2,7,9,3,1]
arr = [100,1,2,100]
console.log(rob(arr))
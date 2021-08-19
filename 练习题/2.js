let permutation = (nums) => {
    let res = []
    let used = {}

    function dfs(path = []) {
        if (path.length === nums.length) {
            res.push(path.slice())
            return
        }

        for (let num of nums) {
            if (used[num]) {
                continue
            }

            path.push(num)
            used[num] = true
            dfs(path)
            path.pop()
            used[num] = false
        }
    }

    dfs()
    return res
}

let arr = [1, 2, 3]
console.log(permutation(arr))
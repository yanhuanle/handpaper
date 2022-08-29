/**
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。
 * 你可以 按任意顺序 返回答案。
 * 示例 1：
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 示例 2：
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 */

let fullPermutation = (nums) => {
    let res = [];
    let used = {};

    function dfs(path = []) {
        if (path.length === nums.length) {
            res.push(path.slice());
            return;
        }

        for (let num of nums) {
            if (used[num]) {
                continue;
            }
            path.push(num);
            used[num] = true;
            dfs(path);
            path.pop();
            used[num] = false;
        }
    }

    dfs();
    return res;
};

let arr = ['1', '2', '3']
console.log(fullPermutation(arr))
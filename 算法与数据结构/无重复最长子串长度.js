function maxLength(str) {
    let mp = new Map();
    let max = 1;
    for (let start = 0, end = 0; end < str.length; end++) {
        if (mp.has(str[end])) {
            start = Math.max(start, mp.get(str[end]) + 1);
        }
        mp.set(str[end], end);
        max = Math.max(max, end - start + 1);
    }
    return max;
}

let str = 'abaccabd';
console.log(maxLength(str));

const flatten = array => {
    return array.reduce((acc, cur) => {
        return Array.isArray(cur)
            ? [...acc, ...flatten(cur)]
            : [...acc, cur]
    }, [])
}
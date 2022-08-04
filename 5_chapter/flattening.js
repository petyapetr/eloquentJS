const arrays = [[1, 2, 3], [4, 5], [6]]

const newArr = arrays.reduce((acc, current) => acc.concat(current), [])

console.log(newArr)
// → [1, 2, 3, 4, 5, 6]
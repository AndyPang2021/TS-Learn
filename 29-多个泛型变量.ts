const getProp: <T, K extends keyof T> (obj: T, key: K) => T[K] = (obj, key) => obj[key]

let person = { name: 'Bob', age: 18 }
console.log(getProp(person, 'name'))
// console.log(getProp(10, 'toFixed'))
console.log(getProp('123', 1)) // 返回索引为1的东西
console.log(getProp([1, 2, 3, 4], 1))



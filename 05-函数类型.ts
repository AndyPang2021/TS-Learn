// function add(num1: number, num2: number): number {
//   return num1 + num2
// }

// 箭头函数 : 为参数 和 返回值添加类型
// const add = (num1: number, num2: number): number => num1 + num2

// 为函数添加类型
// const add: (num1: number, num2: number) => number = (num1, num2) => num1 + num2
// console.log(add(1, 2));

// void 返回值类型 : 没有返回值
// const greet: (name: string) => void = (name) => console.log('Hello ' + name)
// greet('张三')

// 可选参数 必须出现在参数的最后面, 即可选参数后不能有必须参数
const mySlice: (start?: number, end?: number) => void = (start, end) => console.log(`起始索引: ${start}, 终止索引: ${end}`)
mySlice()
mySlice(1)
mySlice(1, 2)



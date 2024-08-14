// 指定更加具体的类型
// const id: <T>(value: T[]) => T[] = (value) => {
//   console.log(value.length)
//   return value
// }

// 添加约束, 要求参数必须可以提供length属性
interface ILength { length: number }
const id: <T extends ILength>(value: T) => T = (value) => {
  console.log(value.length)
  return value
}

id([1, 2, 3, 4])
id('123')
id({ length: 10 })
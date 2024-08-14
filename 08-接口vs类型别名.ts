// 接口 只能给对象指定类型
// interface Person {
//   name: string
//   age: number
//   sayHi: () => void
// }

// 别名 可以为任何类型指定类型
type Person = {
  name: string
  age: number
  sayHi: () => void
}

let person: Person = {
  name: '张三',
  age: 22,
  sayHi: () => console.log('Hello')

}
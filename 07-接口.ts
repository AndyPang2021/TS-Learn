// let person: { name: string; age: number; sayHi: (name: string) => void } = {
// name: '张三',
// age: 22,
// sayHi: (name) => console.log(`Hi, ${name}`)
// }

// 复用对象类型
interface Person {
  name: string
  age: number
  sayHi: () => void
}

let person1: Person = {
  name: '张三',
  age: 22,
  sayHi: () => console.log('Hi')
}

let person2: Person = {
  name: '李四',
  age: 21,
  sayHi: () => console.log('Hi')
}

person1.sayHi()
person2.sayHi()
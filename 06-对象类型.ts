// let person: { name: string; age: number; sayHi: (name: string) => void } = {
//   name: '张三',
//   age: 22,
//   sayHi: (name) => console.log(`Hi, ${name}`)
// }

// let person: {
//   name: string
//   age: number
//   sayHi: (name: string) => void
// } = {
//   name: '张三',
//   age: 22,
//   sayHi: (name) => console.log(`Hi, ${name}`)
// }

// person.sayHi('李四')

// 可选属性
const myAxios: (config: { url: string; method?: string }) => void = ({ url, method }) => {
  console.log(url)
  if (method) {
    console.log(method)
  } else {
    console.log('No method provided')
  }
}

myAxios({ url: 'https://blog.andypang.cc' })
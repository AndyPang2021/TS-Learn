// 返回值类型, 只需要关注返回值类型本身

// 原始类型
type F1 = () => string
type F2 = () => string

let f1: F1 = () => 'f1'
let f2: F2 = () => 'f2'


// 对象类型

type F3 = () => { name: string }
type F4 = () => { name: string; age: number }

let f3: F3 = () => ({ name: 'f1' })
let f4: F4 = () => ({ name: 'f2', age: 1 })

// 返回值成员多的可以赋值给成员少的
f3 = f4

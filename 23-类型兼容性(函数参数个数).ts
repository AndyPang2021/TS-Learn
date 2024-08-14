type F1 = (a: number) => void
type F2 = (a: number, b?: number) => void

let f1: F1 = (a: number) => { }
let f2: F2 = (a: number, b?: number) => { }

f2 = f1

// 错误演示
// f1 = f2
console.log(typeof f1);



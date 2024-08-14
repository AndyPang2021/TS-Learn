// 参数类型: 相同位置的参数类型要相同或兼容

type F1 = (a: number) => void
type F2 = (a: number) => void

let f1: F1 = () => { }
let f2: F2 = f1


interface Point2D {
  x: number
  y: number
}

interface Point3D {
  x: number
  y: number
  z: number
}

type F3 = (p: Point2D) => void
type F4 = (p: Point3D) => void

let f3: F3 = (p: Point2D) => { }
let f4: F4 = (p: Point3D) => { }

// 把属性个数看作参数个数, 参数少的可以赋值给参数多的
f4 = f3

// f3 = f4
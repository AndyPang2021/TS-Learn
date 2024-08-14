interface Point {
  x: number
  y: number
}

interface Point2D {
  x: number
  y: number
}

interface Point3D {
  x: number
  y: number
  z: number
}

let p1: Point = { x: 1, y: 2 }
let p2: Point2D = { x: 1, y: 2 }
let p3: Point3D = { x: 1, y: 2, z: 3 }

p1 = p2

p2 = p3

console.log(typeof p1)
console.log(typeof p2)

class Point4D {
  x: number
  y: number
  z: number
}

// 类 和 接口 之间的兼容
p2 = new Point4D()
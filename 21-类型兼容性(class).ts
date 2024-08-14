// let arr: (number | string)[] = [1, 2, 3, 'a', 'b', 'c']

// arr.forEach(value => console.log(value, typeof value))

class Point {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

class Point2D {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

class Point3D {
  x: number
  y: number
  z: number
  constructor(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }
}

const p: Point = new Point2D(1, 2)
console.log(p)

// 成员少的可以被赋值成员多的类
const p1: Point = new Point3D(1, 2, 3)
console.log(p1)


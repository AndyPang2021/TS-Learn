interface Point2D { x: number; y: number }
// interface Point3D { x: number; y: number; z: number }

// 使用继承实现复用
interface Point3D extends Point2D { z: number }

let point2d: Point2D = {
  x: 1,
  y: 2
}

let point3d: Point3D = {
  x: 1,
  y: 2,
  z: 3
}

console.log(point2d)
console.log(point3d)


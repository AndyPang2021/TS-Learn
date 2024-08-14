type PropKeys = 'x' | 'y' | 'z'
type Type1 = { x: number, y: number, z: number }

// 只能在类型别名中使用
type Type2 = { [Key in PropKeys]: number }

type Type3 = { [Key in keyof Type2]: number }
// 错误演示
// interface Type3 {
//   [key in PropKeys]: number
// }
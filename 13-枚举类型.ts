// 枚举成员有值, 默认从0开始自增的数值
// enum Direction { Up, Down, Left, Right }

// 数字枚举
// enum Direction { Up = 2, Down = 4, Left = 8, Right = 16 }

// 字符串枚举: 必须有初始值, 没有自增长
enum Direction { Up = 'Up', Down = 'Down', Left = 'Left', Right = 'Right' }

const changeDirection: (direcion: Direction) => void = (direction) => console.log(direction)

let direction: Direction = Direction.Down

changeDirection(direction)

console.log(Direction)


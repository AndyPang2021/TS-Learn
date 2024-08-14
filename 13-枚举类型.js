// 枚举成员有值, 默认从0开始自增的数值
// enum Direction { Up, Down, Left, Right }
// 数字枚举
// enum Direction { Up = 2, Down = 4, Left = 8, Right = 16 }
// 字符串枚举: 必须有初始值, 没有自增长
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
var changeDirection = function (direction) { return console.log(direction); };
var direction = Direction.Down;
changeDirection(direction);

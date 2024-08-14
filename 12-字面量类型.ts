let str1 = 'Hello TS'
const str2: 'Hello TS' = 'Hello TS'
let age: 18 = 18

const changeDirection: (direction: 'up' | 'down' | 'left' | 'right') => void = (direction) => {
  console.log(direction)
}

changeDirection('up')
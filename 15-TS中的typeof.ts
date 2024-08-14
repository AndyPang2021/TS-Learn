console.log(typeof 'Hello World')

let p = { x: 1, y: 2 }

const formatPoint: (point: typeof p) => void = (point) => console.log(point)

formatPoint(p)
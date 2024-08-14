class GenericNumber<T> {
  defaultValue!: T
  add!: (x: T, y: T) => T
}

const myNum = new GenericNumber<number>()
myNum.defaultValue = 1
console.log(myNum)

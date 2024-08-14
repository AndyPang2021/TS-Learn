interface AnyObject {
  [key: string]: number
}

let a: AnyObject = {
  a: 1,
  b: 2,
  c: 3
}

interface MyArray<T> {
  [key: number]: T
}

let arr: MyArray<number> = [1, 2, 3, 4, 5] 
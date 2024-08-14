interface IdFunc<T> {
  id: (value: T) => T
  ids: () => T[]
}

let obj: IdFunc<number> = {
  id: (value) => value,
  ids: () => []
}

const a = obj.ids()
a.push(1)
console.log(a)

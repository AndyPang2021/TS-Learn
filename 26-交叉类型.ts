interface Person {
  name: string
}

interface Contact {
  phone: string
}

type PersonDetail = Person & Contact

let pd: PersonDetail = {
  name: '张三',
  phone: '110'
}

interface A {
  fn: (value: number) => void
}

interface B {
  fn: (value: string) => void
}

type C = A & B

let c: C = {
  fn: (value: number | string) => console.log(typeof value)

}
c.fn('2')
c.fn(2)
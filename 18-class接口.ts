interface Singable {
  sing: () => void
}

class Person implements Singable {
  name: string
  age: number
  sing: () => void = () => {
    console.log('Sing')
  }
}


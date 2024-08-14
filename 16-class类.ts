class Person {
  age: number
  // gander = '男'
  gender: string = '男'

  constructor(age: number, gender?: string) {
    this.age = age
    if (gender) {
      this.gender = gender
    }
  }

  setAge(age: number) {
    this.age = age
  }
  setGender(gender: string) {
    this.gender = gender
  }
}

const p = new Person(12)

console.log(p)

class Animal {
  name: string
  move: () => void = () => {
    console.log(this.name + " is moving");
  }
  constructor(name: string) {
    this.name = name
  }
}

class Dog extends Animal {
  age: number
  constructor(name: string, age: number) {
    super(name)
    this.age = age;
  }

  move: () => void = () => {
    console.log(this.age + '岁的' + this.name + "正在运动")
  }
}

let dog: Dog = new Dog("哈士奇", 22)

dog.move()
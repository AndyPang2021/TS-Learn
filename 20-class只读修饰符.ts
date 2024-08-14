class Person {
  // 只读属性只能在构造函数中赋值
  // 如果age的类型注解不加, 则 age 类型变为 18
  readonly age: number
  constructor(age: number) {
    this.age = age
  }
}

let obj: { readonly name: string } = {
  name: 'jack'
}

// obj.name = "bob"
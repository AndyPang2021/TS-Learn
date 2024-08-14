// protected 表示受保护的, 仅在其所在声明类或子类中可见, 实例中不可见, 子类使用this来访问
// private 表示私有的, 只在当前类可见, 对实例对象及子类不可见
class Animal {
  protected move: () => void = () => {
    console.log('Move')
  }
}

class Dog extends Animal {
  public bark: () => void = () => {
    console.log('Woff')
  }
  public move: () => void = () => this.move()
}

const a = new Animal()

// a.move()

const d = new Dog()
d.move()
d.bark()
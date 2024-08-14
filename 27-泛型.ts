const id: <T>(value: T) => T = (value) => value
const num = id<number>(2)
// 若不指定类型,则认为是字面量, 推荐指定
// const num = id('2')
const str = id<string>('2')
// interface Props {
//   id: string
//   children: number[]
// }


// // 可选
// type PartialProps = Partial<Props>

// let p1: PartialProps = {
//   id: '123'
// }

// let p2: Props = {
//   id: '123',
//   children: [1, 2, 3, 4]
// }

// interface Props {
//   id: string
//   children: number[]
// }
// // 只读
// type ReadonlyProps = Readonly<Props>

// let p3: ReadonlyProps = { id: '123', children: [1, 2, 3] }
// // p3.id = '123'

// // 复杂类型可修改内部值
// p3.children[1] = 3

// console.log(p3);


// // 选取属性创建新接口
// interface Props {
//   id: string
//   title: string
//   children: number[]
// }

// type PickProps = Pick<Props, 'id' | 'title'>

// let p1: PickProps = {
//   id: '123',
//   title: '122'
// }

// type RecordObj = Record<'a' | 'b' | 'c', string[]>
// let obj: RecordObj = {
//   a: ['a'],
//   b: ['b'],
//   c: ['c']
// }


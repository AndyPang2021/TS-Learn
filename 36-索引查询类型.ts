type Props = { a: number, b: number, c: string }

type TypeA = Props['a'] // number

type TypeA_B = Props['a' | 'b'] // number | number => number

type TypeA_B_C = Props['a' | 'b' | 'c'] // number | number | string => number | string

type TypeAll = Props[keyof Props] // number | number | string => number | string
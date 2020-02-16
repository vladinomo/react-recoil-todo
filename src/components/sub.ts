import add from './add'
const sub = (a: number, b: number): number => {
  return add(a, -b)
}

export default sub

console.log('챕터1')

// 기존함수
// function sum(a, b) {
//     return a + b
// }
// 화살표함수
const sum = (a, b) => a + b
console.log(sum(1, 2))
console.log(sum(10, 20))

console.log('챕터2')
const a = () => {}
const b = x => {} //const b = (x) => {}
const c = (x, y) => {}
const e = x => x * x //const e = x => { return x * x }
const f = x => {
    console.log(x * x)
    return x * x
}
const g = () => ({ a : 1 })  //const g = () => { return { a : 1 } }
const i = () => [1, 2, 3] // const i = () => { return [1, 2, 3] }


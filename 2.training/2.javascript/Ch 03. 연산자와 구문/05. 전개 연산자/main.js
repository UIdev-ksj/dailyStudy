console.log('챕터1')

const a = [1,2,3]
const b = [4,5,6]

console.log(a)
console.log(...a)

const c = a.concat(b) //배열합치기
console.log(c)

const d = [a, b]
console.log(d) // [1,2,3], [4,5,6]

const e = [...a, ...b]
console.log(e) // [1,2,3,4,5,6]

console.log('챕터2')
const f = {x: 1, y: 2}
const g = {y: 3, z: 4}

const h = Object.assign({}, f, g)
console.log(h) //y가 겹치므로 마지막 y값이 나옴

const i = {f, g}
console.log(i) //{ f:{x: 1, y: 2}, g:{y: 3, z: 4}}
const j = {...f, ...g}
console.log(j) //{x: 1, y: 2, y: 3, z: 4} y는 중복 마지막으로 덮어씌움

console.log('챕터3')
function fn(x, y, z) {
    console.log(x, y, z)
}
fn(1, 2, 3)

const k = [1, 2, 3]
fn(...a) //fn(a[0], a[1], a[2]) 동일한 효과
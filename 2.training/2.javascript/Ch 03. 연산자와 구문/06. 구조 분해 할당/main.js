console.log('챕터1')

// let a = 0
// let b = 0
// let c = 0

const arr = [1, 2, 3]

;[, b, c] = arr
//a변수를 제거 후 b와 c에만 할당하고싶으면
//a변수자리를 비워두고 쉼표는 있어야 된다.

console.log(b, c)

console.log('챕터2')
//특정 숫자는 할당하고 나머지는 한군데 모아서 할당
const [a, ...rest] = arr

console.log(a, rest)


console.log('챕터3')
const obj = {
    q: 1,
    w: 2,
    e: 3,
    r: 7,
    y: 100
}
// const {e} = obj
//객체데이터안에서 원하는 속성값을 가져올수 있다.
// console.log(e)

const { e, ...rest2 } = obj
console.log(e, rest2)

const {r = 4, q: heropy, y: ten = 10} = obj
//객체데이터안에 속성 값이 없다면 기본값을 지정할수 있다.
//q: heropy = q속성이름을 heropy로 변경
// 새로운 속성을 추가하며 기본값을 할당하며 이름을 변경할수 있다.
console.log(r, heropy, ten)
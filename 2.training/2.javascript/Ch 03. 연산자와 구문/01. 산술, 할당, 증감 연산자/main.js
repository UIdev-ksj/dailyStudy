//산술연산자
console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5) //7을 5로 나누고 나머지 숫자를 보여줌, 짝수와 홀수를 구분하는데 사용도 함

function isEven(num) {
    return num % 2 === 0
}
console.log(isEven(2))
console.log(isEven(3))

//할당연산자
let a = 3
a += 2 // a = a + 2 와 동일
console.log(a)

//증감 연산자
let b = 3

console.log(b++)
console.log(b)

console.log(b--)
console.log(b)
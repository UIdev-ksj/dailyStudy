console.log('챕터1')
//기본값 지정
function sum(a, b = 1) {
    return a + b
}
console.log(sum(1, 2))
console.log(sum(7))


console.log('챕터2')
const user = {
    name: 'HEROPY',
    age: 85,
    email: 'asd@asd.com'
}
function getName({ name }) {
    return name
}
//기본값 지정
function getEmail({ email = '이메일이 없습니다.' }) {
    return email
}
console.log(getName(user))
console.log(getEmail(user))


console.log('챕터3')
const fruits = ['Apple', 'Banana', 'Cherry']
const numbers = [1, 2, 3, 4, 5, 6, 7]
function getSecondItem([, b]) {
    return b
}
console.log(getSecondItem(fruits))
console.log(getSecondItem(numbers))

console.log('챕터4')
function sum2(...rest) {
    console.log(rest)
    console.log(arguments) // javascript에 저장된 함수내부 객체
    return rest.reduce(function (acc, cur) {
        return acc + cur
    }, 0)
    //reduce() : 배열데이터의 아이템 갯수 만큼 콜백 함수를 실행
    //acc : 값이누적된다. 최초값은 콜백함수 뒤의 숫자
    //cur : 현제값. 반복되는 아이템의 값
}

console.log(sum2(1, 2))
console.log(sum2(1, 2, 3 , 4))
console.log(sum2(1, 2, 3 , 4, 5, 6, 7, 8, 9, 10))
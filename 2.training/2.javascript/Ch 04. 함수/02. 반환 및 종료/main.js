console.log('챕터1')
function hello() {
    return 'Hello~'
    //return 뒤에 아무것도 없으면 undefined반환
    //함수내 아무것도 없으도 undefined반환
}
console.log(hello())

console.log('챕터2')
function plus(num) {
    // num이 숫자데이터 이면 아래 num + 1반환
    // num이 숫자가 아니라면 내부 코드 실행
    if (typeof num !== 'number') {
        console.log('숫자를 입력해주세요!')
        return 0
    }
    return num + 1
}
console.log(plus(2)) //3
console.log(plus(7)) //8
console.log(plus()) //NaN

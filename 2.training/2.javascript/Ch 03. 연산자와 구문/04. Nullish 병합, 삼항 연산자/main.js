console.log('Nullish 연산자')

const n = 0

const num1 = n || 7

// or연산자 사용
console.log(num1) // 7

//Nullish 병합 연산자 사용
const num2 = n ?? 7
console.log(num2) // 0

console.log(null ?? 1) // 1
console.log(undefined ?? 2) // 2
console.log(null ?? undefined) // undefined
console.log(null ?? 1 ?? 2) // 1
console.log(false ?? 1 ?? 2) // false
console.log(0 ?? 1 ?? 2) // false


console.log('삼항 연산자')
const a = 1

// if문으로 작성
if(a < 2) {
    console.log('참!')
} else {
    console.log('거짓...')
}

//삼항연산자로 구분
console.log(a < 2 ? '참!' : '거짓...')

function getAlert(message) {
    return message ? message : '메시지가 존재하지 않습니다!'
    // message가 참일경우 message 를 반환, 거짓일 경우 : 뒤의 메시지 반환
}
console.log(getAlert('안녕하세요~'))
console.log(getAlert(''))
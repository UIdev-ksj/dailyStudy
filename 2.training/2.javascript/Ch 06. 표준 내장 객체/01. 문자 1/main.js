const str = 'Hello world!'
//           012345678901

// .length
// 문자의 길이(숫자)를 반환
console.log(str.length)

// .includes()
// 대상 문자에 주어진 문자가 포함되어 있는지(불린) 확인
console.log(str.includes('Hello'))
console.log(str.includes('Hello', 0)) // true
console.log(str.includes('Hello', 1)) // flase

// .indexOf()
// 대상 문자에서 주어진 문자와 일치하는 첫번째 인텍스(숫자)를 반환
// 일치하는 문자가 없으면 '-1'을 반환
console.log(str.indexOf('world')) // 6
console.log(str.indexOf('!')) // 11
console.log(str.indexOf('HEROPY')) // -1
console.log(str.indexOf('Heropy')) // -1

if (str.indexOf('HEROPY') === -1) {
    console.log('HEROPY가 없습니다.')
}
if (!str.includes('HEROPY')) {
    console.log('HEROPY가 없습니다.')
}
// indexOf도 사용 가능하지만 includes도 사용가능하다.

const str2 = '1234567'

// .padEnd()
// 대상 문자의 길이(length)가 지정된 길이보다 작으면, 
// 주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자를 반환
console.log(str2.padEnd(10, '0')) // 1234567000
console.log(str2.padEnd(5, '0')) // 1234567
console.log(str2.padEnd(10, '!')) // 1234567!!!
console.log(str2) // 1234567

// .padStart()
// 대상 문자의 길이(length)가 지정된 길이보다 작으면, 
// 주어진 문자를 지정된 길이까지 앞에에 붙여 새로운 문자를 반환
console.log(str2.padStart(10, '0')) // 0001234567
console.log(str2) // 1234567
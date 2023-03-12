// .replace()
// 대상의 문자에서 패턴(문자, 정규식)과 일치하는 부분을 교체한 새로운 문자를 반환
const str = 'Hello, Hello?!'

console.log(str.replace('Hello', 'Hi')) // Hi, Hello?!
console.log(str.replace(/Hello/g, 'Hi'))  // Hi, Hi?! (Hello 모두를 바꾼다.), //g (정규표현식, g는 글로벌을 뜻함, 모두 찾아서 바꿔준다.)
console.log(str)

// .slice()
// 대상 문자의 일부를 추출해 새로운 문자를 반환
// 두번째 인수 직전까지 추출, 두번째 인수를 생략하면 대상 문자의 끝까지 추출
const str2 = 'Hello world!'
//            012345678901
//           -210987654321

console.log(str2.slice(0, 5)) // Hello
console.log(str2.slice(6, -1)) // world
console.log(str2.slice(6)) // world!
console.log(str2) // Hello world!


// .split()
// 대상 문자를 주어진 구분자로 나워 배열로 반환
const str3 = 'Apple, Banana, Cherry'
console.log(str3.split(', ')) // ['Apple', 'Banana', 'Cherry']
console.log(str3.split('')) //  ['A', 'p', 'p', 'l', 'e', ',', ' ', 'B', 'a', 'n', 'a', 'n', 'a', ',', ' ', 'C', 'h', 'e', 'r', 'r', 'y']
console.log(str3.split('').reverse()) //['y', 'r', 'r', 'e', 'h', 'C', ' ', ',', 'a', 'n', 'a', 'n', 'a', 'B', ' ', ',', 'e', 'l', 'p', 'p', 'A']
console.log(str3.split('').reverse().join('')) //yrrehC ,ananaB ,elppA

const str4 = 'Apple / Banana / Cherry'
console.log(str4.split(' / ')) // ['Apple', 'Banana', 'Cherry']


const str5 = 'Apple, Banana, Cherry'
// .toLowerCase()
// 대상 문자를 소문자로 변환해 새로운 문자로 반환
console.log(str5.toLowerCase())
console.log(str5)

// .toUpperCase()
// 대상 문자를 대문자로 변환해 새로운 문자로 반환
console.log(str5.toUpperCase())
console.log(str5)


// .trim()
// 대상의 문자의 앞뒤 공백 문자(space, tab 등)를 제거한 새로운 문자를 반환
const str6 = '     HEROPY     '
console.log(str6.trim())
console.log(str6)